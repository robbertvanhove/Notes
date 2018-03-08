using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Boeken.Model;
using System.IO;
using System.Collections.ObjectModel;


namespace Boeken.ViewModel
{
   public class BoekenViewModel : BaseViewModel
    {
        private ObservableCollection<Boek> boeken;
        public ObservableCollection<Boek> Boeken
        {
            get
            {
                return boeken;
            }

            set
            {
                boeken = value;
                NotifyPropertyChanged();
            }
        }

        public BoekenViewModel()
        {
            Boeken = LadenBoeken();
            //KoppelenCommands();
        }

        public ObservableCollection<Boek> LadenBoeken()
        {
            ObservableCollection<Boek> bibliotheek = new ObservableCollection<Boek>();

            using (StreamReader reader = new StreamReader(AppDomain.CurrentDomain.BaseDirectory + "/Data/boeken.txt", UTF8Encoding.Default))
            {
                string[] record = reader.ReadLine().Split(';');
                while (!reader.EndOfStream)
                {
                    record = reader.ReadLine().Split(';');
                    bibliotheek.Add(new Boek(record[0], record[1], AppDomain.CurrentDomain.BaseDirectory + "/Resources/" + record[2], record[3]));
                }

            }
            return bibliotheek;
        }

    }
}
