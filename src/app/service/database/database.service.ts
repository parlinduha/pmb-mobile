import { Injectable, WritableSignal, signal } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import { BehaviorSubject, of, Observable } from 'rxjs';

const DB_USERS = 'pmb';

export interface USER {
  id: number;
  email: string;
  name: string;
  workStatus: string;
  bornDate: string;
  genderOption: string;
  religionOption: string;
  whatsappNumber: string;
  homeAddress: string;
  isRegister: boolean;
  avatar: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private users: BehaviorSubject<USER[]> = new BehaviorSubject<USER[]>([]);

  constructor() {}

  async initializePlugin() {
    this.db = await this.sqlite.createConnection(
      DB_USERS,
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

    const schema = `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      workStatus VARCHAR(255),
      bornDate VARCHAR(255),
      genderOption VARCHAR(255),
      religionOption VARCHAR(255),
      whatsappNumber VARCHAR(255),
      homeAddress VARCHAR(255),
      isRegister BOOLEAN DEFAULT True,
      avatar VARCHAR(255),
      password VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL
    );`;
    await this.db.execute(schema);
    await this.loadUsers();
    await this.addAdminAccount(); // Tambahkan akun admin
    return true;
  }

  private async addAdminAccount() {
    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123'; // Pastikan Anda mengenkripsi password dalam aplikasi produksi
    const adminUser: USER = {
      id: Date.now(),
      email: adminEmail,
      name: 'Admin',
      workStatus: '',
      bornDate: '',
      genderOption: '',
      religionOption: '',
      whatsappNumber: '',
      homeAddress: '',
      isRegister: true,
      avatar: '',
      password: adminPassword,
      role: 'admin',
    };

    const result = await this.db.query(`SELECT * FROM users WHERE email = ?`, [adminEmail]);
    if (result.values && result.values.length === 0) {
      await this.createUser(adminUser);
    }
  }

  getUsers(): Observable<USER[]> {
    return of(this.users.value);
  }

  async loadUsers() {
    const user = await this.db.query(`SELECT * FROM users;`);
    this.users.next(user.values || []);
  }

  async createUser(user: USER) {
    await this.ensureDbConnection();
    const query = `INSERT INTO users (email, name, workStatus, bornDate, genderOption, religionOption, whatsappNumber, homeAddress, isRegister, avatar, password, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      user.email,
      user.name,
      user.workStatus,
      user.bornDate,
      user.genderOption,
      user.religionOption,
      user.whatsappNumber,
      user.homeAddress,
      user.isRegister,
      user.avatar,
      user.password,
      user.role,
    ];
    const result = await this.db.query(query, values);
    return result;
  }

  async updateUser(user: USER) {
    await this.ensureDbConnection();
    const query = `UPDATE users SET email = ?, name = ?, workStatus = ?, bornDate = ?, genderOption = ?, religionOption = ?, whatsappNumber = ?, homeAddress = ?, isRegister = ?, avatar = ?, password = ?, role = ? WHERE id = ?`;
    const values = [
      user.email,
      user.name,
      user.workStatus,
      user.bornDate,
      user.genderOption,
      user.religionOption,
      user.whatsappNumber,
      user.homeAddress,
      user.isRegister,
      user.avatar,
      user.password,
      user.role,
      user.id,
    ];
    const result = await this.db.query(query, values);
    this.loadUsers();
    return result;
  }

  async deleteUser(id: number) {
    await this.ensureDbConnection();
    const query = `DELETE FROM users WHERE id = ?`;
    const result = await this.db.query(query, [id]);
    this.loadUsers();
    return result;
  }

  private async ensureDbConnection() {
    if (!this.db) {
      await this.initializePlugin();
    }
  }
}
