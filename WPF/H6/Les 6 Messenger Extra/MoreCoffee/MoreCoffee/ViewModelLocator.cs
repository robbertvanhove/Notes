using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MoreCoffee.ViewModel;

namespace MoreCoffee
{
    class ViewModelLocator
    {

        private static MenuWindowViewModel menuWindowViewModel = new MenuWindowViewModel();
        private static DetailWindowViewModel detailWindowViewModel = new DetailWindowViewModel();

        public static MenuWindowViewModel MenuWindowViewModel
        {
            get
            {
                return menuWindowViewModel;
            }
        }

        public static DetailWindowViewModel DetailWindowViewModel
        {
            get
            {
                return detailWindowViewModel;
            }
        }

    }
}
