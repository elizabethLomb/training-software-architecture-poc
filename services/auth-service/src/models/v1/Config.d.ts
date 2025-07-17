export interface ConfigServerProps {
  port: number | string
  host: string
  env: string
}

export interface ConfigDatabaseProps {
  postgreSql: {
    connectionString: string
  }
}

export interface ConfigJwtProps {
  secret: string
}

export interface ConfigProps {
  server: ConfigServerProps
  databases: ConfigDatabaseProps
  jwt: ConfigJwtProps
}