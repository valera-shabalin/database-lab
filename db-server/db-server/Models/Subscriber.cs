using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace db_server.Models
{
    public class Subscriber
    {
        public string Fio { get; set; }

        public string Street { get; set; }

        public int House { get; set; }

        public Subscriber(string fio, string street, int house)
        {
            this.Fio = fio;
            this.Street = street;
            this.House = house;
        }
    }
}
