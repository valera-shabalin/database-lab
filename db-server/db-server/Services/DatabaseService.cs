using System;
using Npgsql;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace db_server.Services
{
    public class DatabaseService
    {
        private string DBName;
        private string DBUser;
        private string DBPassword;
        private string DBHost;
        private int DBPort;

        public DatabaseService(string user, string name, string password, string host, int port)
        {
            this.DBName = name;
            this.DBUser = user;
            this.DBPassword = password;
            this.DBHost = host;
            this.DBPort = port;

            Console.WriteLine("\nCreate connection with database...\n");

            string connect = $"Server={this.DBHost};Username={this.DBUser};Database={this.DBName};Port={this.DBPort};Password={this.DBPassword};SSLMode=Prefer";

            using(var conn = new NpgsqlConnection(connect))
            {

            }
        }

        public DatabaseService(string user, string name, string password) : this(user, name, password, "host", 456) { }
    }
}
