using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kassa.Model;
using Kassa.View;
using System.Windows.Input;
using Kassa.Extensions;
using Kassa.Messages;
using System.Windows;

namespace Kassa.ViewModel
{
    class ProductenOverzichtViewModel: BaseViewModel
    {
        //constructor
        public ProductenOverzichtViewModel()
        {
            LeesGegevens();
            
        }
        
        //
        private DialogService dialogService = new DialogService();

        private ObservableCollection<Product> producten;
        private ObservableCollection<Product> Producten
        {
            get { return producten; }
            set
            {
                producten = value;
                NotifyPropertyChanged();
            }
        }

        //gegevens ophalen
        private void LeesGegevens()
        {
            ProductDataService ds = new ProductDataService();
            Producten = ProductDataService.GetProducten();
            
        }

    }
}
