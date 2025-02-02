export interface ManageUser {
  username: string
  sub?: string
  emailVerified?: boolean
  name?: string
  family_name?: string
  email: string
  created?: string
  lastModified?: string
  enabled?: boolean
  password?: string
  userStatus?: 'UNCONFIRMED' | 'CONFIRMED' | 'FORCE_CHANGE_PASSWORD'
}

export interface TestManageUser {
  username: string
  name?: string
}

export interface IManageUserCollection {
  getAllUsers: () => Promise<[ManageUser[] | null, any | null]>
  getUserById: (username: string) => Promise<ManageUser | null | any | null>
  addUser: (fields: Omit<ManageUser, 'id'>) => Promise<[ManageUser | null, any | null]>
  updateUser: (username: string, fields: Omit<ManageUser, 'username'>) => Promise<[ManageUser | null, any | null]>
  deleteUser: (username: string) => Promise<boolean>
  resetUserPassword: (email: string) => Promise<[ManageUser | null, any | null]>
}

export interface ManageAdmin {
  username: string
  sub?: string
  emailVerified?: boolean
  name?: string
  family_name?: string
  email?: string
  created?: string
  lastModified?: string
  enabled?: boolean
  password?: string
  userStatus?: 'UNCONFIRMED' | 'CONFIRMED' | 'FORCE_CHANGE_PASSWORD'
}

export interface IManageAdminCollection {
  getAllAdmins: () => Promise<[ManageAdmin[] | null, any | null]>
  getAdminById: (username: string) => Promise<ManageAdmin | null>
  addAdmin: (fields: Omit<ManageAdmin, 'id'>) => Promise<[string | null, any | null]>
  updateAdmin: (username: string, fields: Omit<ManageAdmin, 'username'>) => Promise<[ManageAdmin | null, any | null]>
  deleteAdmin: (username: string) => Promise<boolean>
}