using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using Kassasysteem.Model;
using System.ComponentModel;

namespace Kassasysteem.ViewModel
{
    class MainWindowViewModel : BaseViewModel
    {
        //constructor
        public MainWindowViewModel()
        {
            KoppelenCommands();
            FrameSource = "Kassa.xaml";
        }

        //variables
        private  String frameSource;
        public  String FrameSource
        {
            get { return frameSource; }
            set
            {
                frameSource = value;
                NotifyPropertyChanged();
            }
        }

        //commands
        private ICommand changeToProductsCommand;
        public ICommand ChangeToProductsCommand
        {
            get
            {
                return changeToProductsCommand;
            }
            set
            {
                changeToProductsCommand = value;

            }
        }

        private ICommand changeToKassaCommand;
        public ICommand ChangeToKassaCommand
        {
            get
            {
                return changeToKassaCommand;
            }
            set
            {
                changeToKassaCommand = value;

            }
        }


        //actions
        private void KoppelenCommands()
        {
            changeToProductsCommand = new BaseCommand(changeToProducts);
            ChangeToKassaCommand = new BaseCommand(changeToKassa);
        }

        private void changeToProducts()
        {
            FrameSource = "ProductenOverzicht.xaml";
        }
        private void changeToKassa()
        {
            FrameSource = "Kassa.xaml";
        }



    }
}
