using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MoreCoffee.Model;
using MoreCoffee.Extensions;
using System.Diagnostics;
using MoreCoffee.View;
using System.Windows.Input;
using MoreCoffee.Messages;

namespace MoreCoffee.ViewModel
{
    public class DetailWindowViewModel : BaseViewModel
    {
        private Koffie selectedKoffie;
        public Koffie SelectedKoffie
        {
            get
            {
                return selectedKoffie;
            }
            set
            {
                selectedKoffie = value;
                NotifyPropertyChanged();
            }
        }

        public ICommand UpdateCommand { get; set; }

        public DetailWindowViewModel()
        {
            Messenger.Default.Register<Koffie>(this, OnCoffeeReceived);
            UpdateCommand = new BaseCommand(UpdateKoffie);
        }
        private void OnCoffeeReceived(Koffie koffie)
        {
            SelectedKoffie = koffie;
        }




        private void UpdateKoffie()
        {
            KoffieDataService ds = new KoffieDataService();
            ds.UpdateKoffie(SelectedKoffie);
            Messenger.Default.Send<UpdateFinishedMessage>(new UpdateFinishedMessage("Completed"));
        }
        
    }
}
