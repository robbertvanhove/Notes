using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kassasysteem.ViewModel;

namespace Kassasysteem
{
    class ViewModelLocator
    {
        private static MainWindowViewModel mainWindowViewModel = new MainWindowViewModel();
        public static MainWindowViewModel MainWindowViewModel
        {
            get
            {
                return mainWindowViewModel;
            }
        }

        private static ProductenViewModel productenViewModel = new ProductenViewModel();
        public static ProductenViewModel ProductenViewModel
        {
            get
            {
                return productenViewModel;
            }
        }

        private static ProductWijzigenViewModel productWijzigenViewModel = new ProductWijzigenViewModel();
        public static ProductWijzigenViewModel ProductWijzigenViewModel
        {
            get
            {
                return productWijzigenViewModel;
            }
        }



    }
}
