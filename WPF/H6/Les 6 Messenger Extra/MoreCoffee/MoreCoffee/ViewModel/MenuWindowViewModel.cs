using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MoreCoffee.Model;
using MoreCoffee.View;
using System.Windows.Input;
using MoreCoffee.Extensions;
using MoreCoffee.Messages;
using System.Windows;

namespace MoreCoffee.ViewModel
{
    public class MenuWindowViewModel : BaseViewModel
    {
        private DialogService dialogService = new DialogService();

        private ObservableCollection<Koffie> koffies;
        public ObservableCollection<Koffie> Koffies
        {
            get
            {
                return koffies;
            }
            set
            {
                koffies = value;
                NotifyPropertyChanged();
            }
        }

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

        public ICommand WijzigenCommand { get; set; }

        public MenuWindowViewModel()
        {
            LeesGegevens();
            KoppelenCommands();

            Messenger.Default.Register<UpdateFinishedMessage>(this, OnMessageReceived);

        }

        private void OnMessageReceived(UpdateFinishedMessage message)
        {
            if (message.State == "Completed")
            {
                dialogService.CloseDetailDialog();
            }
        }


        private void LeesGegevens()
        {
            KoffieDataService ds = new KoffieDataService();
            Koffies = ds.GetKoffies();
        }

        private void KoppelenCommands()
        {
            WijzigenCommand = new BaseCommand(WijzigenKoffie);
        }

        private void WijzigenKoffie()
        {
            if (SelectedKoffie != null)
            {
                Messenger.Default.Send<Koffie>(SelectedKoffie);
                dialogService.ShowDetailDialog();
            }
        }
    }

}
