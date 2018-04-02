using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using Kassasysteem.Extensions;
using Kassasysteem.Model;

namespace Kassasysteem.ViewModel
{
    class ProductWijzigenViewModel: BaseViewModel
    {
        //constructor
        public ProductWijzigenViewModel()
        {
            LeesGegevens();
        }

        //vars
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

        private List<Btw> btwTypes;
        public List<Btw> BtwTypes
        {
            get { return btwTypes; }
            set
            {
                btwTypes = value;
            }
        }

        private int btwIndex;
        public int BtwIndex
        {
            get { return btwIndex; }
            set
            {
                btwIndex = value;
            }
        }

        //commands
        public ICommand UpdateCommand { get; set; }

        //actions
        private void OnProductReceived(Product product)
        {
            SelectedProduct = product;
            BtwIndex = product.BtwID;
        }

        private void LeesGegevens()
        {
            //product ontvangen
            Messenger.Default.Register<Product>(this, OnProductReceived);

            //btw types ophalen
            BtwDataService ds = new BtwDataService();
            BtwTypes = ds.GetBtwTypes();

            

            
        }

        
    }
}
