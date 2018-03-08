using System.Collections.ObjectModel;
using Daguitstap.Model;
using System.Windows.Input;
using System.Windows;

namespace Daguitstap.ViewModel
{
    public class LedenViewModel : BaseViewModel
    {
        public LedenViewModel()
        {
            LeesGegevens();
            KoppelenCommands();
        }

       //vars
        private ObservableCollection<Lid> deelnemers;
        public ObservableCollection<Lid> Deelnemers
        {
            get
            {
                return deelnemers;
            }

            set
            {
                deelnemers = value;
                NotifyPropertyChanged();
            }
        }

        private ObservableCollection<Lid> leden;
        public ObservableCollection<Lid> Leden
        {
            get
            {
                return leden;
            }

            set
            {
                leden = value;
                NotifyPropertyChanged();
            }
        }

        private Lid currentLid;
        public Lid CurrentLid
        {
            get { return currentLid; }
            set
            {
                currentLid = value;
                NotifyPropertyChanged();
            }
        }

        //functions

        private void KoppelenCommands()
        {
            InschrijvenCommand = new BaseCommand(Inschrijven);
            UitschrijvenCommand = new BaseCommand(Uitschrijven);
        }

        private void LeesGegevens()
        {
            LidDataService lidDS = new LidDataService();
            Deelnemers = new ObservableCollection<Lid>(lidDS.GetDeelnemers());
            
            Leden = new ObservableCollection<Lid>(lidDS.GetDeelnemers(false));

        }

        //commands
        public ICommand InschrijvenCommand { get; set; }
        public ICommand UitschrijvenCommand { get; set; }

        public void Inschrijven()
        {
            if (currentLid != null)
            {
                LidDataService lidDS = new LidDataService();
                lidDS.Inschrijven(currentLid, 1);

                //refresh
                LeesGegevens();
            }
        }

        public void Uitschrijven()
        {
            if (currentLid != null)
            {
                LidDataService lidDS = new LidDataService();
                lidDS.Inschrijven(currentLid, 0);

                //refresh
                LeesGegevens();
            }
        }



    }
}
