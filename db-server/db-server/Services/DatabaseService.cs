using System;
using Npgsql;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using db_server.Models;

namespace db_server.Services
{
    public class DatabaseService
    {
        private string DBName;
        private string DBUser;
        private string DBPassword;
        private string DBHost;
        private int DBPort;

        private string connect;

        private string query = "SELECT t_pod.fio, t_address.street, t_address.house FROM t_pod, t_address WHERE t_address.city='Томск' AND t_pod.id_addr= t_address.id GROUP BY t_pod.fio, t_address.street, t_address.house ORDER BY t_address.house;";

        public DatabaseService(string user, string name, string password, string host, int port)
        {
            this.DBName = name;
            this.DBUser = user;
            this.DBPassword = password;
            this.DBHost = host;
            this.DBPort = port;

            this.connect = $"Server={this.DBHost};User Id={this.DBUser};Database={this.DBName};Port={this.DBPort};Password={this.DBPassword};";
        }

        public DatabaseService(string user = "postgres", string name = "subscribe_system", string password = "postgres") : this(user, name, password, "127.0.0.1", 5432) { }

        public List<Subscriber> GetSubscribers()
        {
            List<Subscriber> subs = new List<Subscriber>();

            using (var conn = new NpgsqlConnection(connect))
            {
                conn.Open();

                using (var command = new NpgsqlCommand(query, conn))
                {

                    var reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        subs.Add(new Subscriber(reader.GetString(0).Trim(), reader.GetString(1).Trim(), reader.GetInt32(2)));
                    }
                    reader.Close();
                }

                conn.Close();

                return subs;
            }
        }
    }
}
