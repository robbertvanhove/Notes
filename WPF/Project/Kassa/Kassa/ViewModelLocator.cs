using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kassa.ViewModel;

namespace Kassa
{
    class ViewModelLocator
    {

        private static ProductenOverzichtViewModel productenOverzichtViewModel = new ProductenOverzichtViewModel();

        public static ProductenOverzichtViewModel ProductenOverzichtViewModel
        {
            get
            {
                return productenOverzichtViewModel;
            }
        }

        

    }
}
