using System;
using System.Collections.ObjectModel;
using System.IO;
using System.Text;
using System.Windows.Input;
using Boeken.Model;


namespace Boeken.ViewModel
{
    class BoekenViewModel: BaseViewModel
    {
        private ObservableCollection<Boek> boeken;
        public ObservableCollection<Boek> Boeken
        {
            get { return boeken; }
            set
            {
                boeken = value;
                NotifyPropertyChanged();
            }
        }

        public BoekenViewModel()
        {
            LadenBoeken();
        }


        public void LadenBoeken()
        {
            Boeken = new ObservableCollection<Boek>();

            using (StreamReader sr = new StreamReader(AppDomain.CurrentDomain.BaseDirectory  + "/Data/boeken.txt", Encoding.UTF7))
            {

                while (sr.Peek() > 0)
                {
                    String lijn =  sr.ReadLine() ;
                    string[] substrings = lijn.Split(char.Parse(";"));

                    Boeken.Add(new Boek(substrings[0], substrings[1], substrings[2], substrings[3]));
                    
                }
            }



        }

    }
}
