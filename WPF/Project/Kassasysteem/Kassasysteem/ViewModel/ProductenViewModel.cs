using Kassasysteem.Model;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using Kassasysteem.Extensions;
using Kassasysteem.Messages;

namespace Kassasysteem.ViewModel
{
    class ProductenViewModel : BaseViewModel
    {
        private DialogService dialogService = new DialogService();
        private ProductDataService productDataService = new ProductDataService();

        //constructor
        public ProductenViewModel()
        {
            LeesProducten();
            KoppelenCommands();
            LeesSnelkeuzes();
            Messenger.Default.Register<UpdateFinishedMessage>(this, OnMessageReceived);


        }


        //datacontext
        private ObservableCollection<Product> producten;
        public ObservableCollection<Product> Producten
        {
            get
            {
                return producten;
            }
            set
            {
                producten = value;
                NotifyPropertyChanged();
            }
        }

        private Product selectedProduct;
        public Product SelectedProduct
        {
            get { return selectedProduct; }
            set
            {
                selectedProduct = value;
                NotifyPropertyChanged();
            }
        }

        private ObservableCollection<Product> snelkeuzes;
        public ObservableCollection<Product> Snelkeuzes
        {
            get { return snelkeuzes; }
            set
            {
                snelkeuzes = value;
                NotifyPropertyChanged();
            }
        }

        private Product selectedSnelkeuze;
        public Product SelectedSnelkeuze
        {
            get { return selectedSnelkeuze ; }
            set
            {
                selectedSnelkeuze = value;
                NotifyPropertyChanged();
            }
        }

        //Commands
        /**
         * product verwijderen
         */

        public ICommand DeleteProductCommand { get; set; }
        private void deleteProduct()
        {
            productDataService.VerwijderProduct(selectedProduct);
            LeesProducten();
            LeesSnelkeuzes();
        }


        /**
         * product wijzigen
         */
        public ICommand WijzigenCommand { get; set; }
        private void wijzigProduct()
        {
            if (SelectedProduct != null)
            {
                Messenger.Default.Send<Product>(SelectedProduct);
                dialogService.ShowProductWijzigenDialog();
            }
        }

        /**
         * Product toevoegen aan snelkeuzes
         */
        public ICommand MaakSnelkeuzeCommand { get; set; }
        private void maakSnelkeuze()
        {
            productDataService.SetSnelkeuze(SelectedProduct, true);
            LeesSnelkeuzes();
        }

        /**
         * Product verwijderen uit snelkeuzes 
         */
        public ICommand VerwijderSnelkeuzeCommand { get; set; }
        private void verwijderSnelkeuze()
        {
            productDataService.SetSnelkeuze(SelectedSnelkeuze, false);
            LeesSnelkeuzes();
        }

        public ICommand ToevoegenCommand { get; set; }
        private void toevoegen()
        {
            Product product = new Product();
            product.Barcode = "ding";
            product.Naam = "goedzo";
            product.BtwID = 1;

            productDataService.InsertProduct(product);
            LeesProducten();

        }





        //initial actions
        private void KoppelenCommands()
        {
            DeleteProductCommand = new BaseCommand(deleteProduct);
            WijzigenCommand = new BaseCommand(wijzigProduct);
            MaakSnelkeuzeCommand = new BaseCommand(maakSnelkeuze);
            VerwijderSnelkeuzeCommand = new BaseCommand(verwijderSnelkeuze);
            ToevoegenCommand = new BaseCommand(toevoegen);
            LeesProducten();
        }


        private void LeesProducten()
        {
            Producten = new ObservableCollection<Product>(productDataService.GetProducten());

        }

        private void LeesSnelkeuzes()
        {
            Snelkeuzes = new ObservableCollection<Product>(productDataService.GetSnelkeuzes());
        }

        private void OnMessageReceived(UpdateFinishedMessage message)
        {
            if (message.State == "Completed")
            {
                dialogService.CloseProductWijzigenDialog();
            }
        }
    }
}
