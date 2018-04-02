using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kassa.Model
{
    class Btw : BaseModel
    {
        //attributes
        private int id;
        private int percentage;

        //constructors
        public int Id
        {
            get { return id; }
            set
            {
                id = value;
                NotifyPropertyChanged();
            }
        }

        public int Percentage
        {
            get { return Percentage; }
            set
            {
                Percentage = value;
                NotifyPropertyChanged();
            }
        }
    }
}
