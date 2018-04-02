using MoreCoffee.View;
using MoreCoffee.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace MoreCoffee.Extensions
{
    public class DialogService
    {

        private Window koffieDetailView = null;

        public DialogService() {}

        public void ShowDetailDialog()
        {
            koffieDetailView = new DetailWindow();
            koffieDetailView.ShowDialog();
        }

        public void CloseDetailDialog()
        {
            if (koffieDetailView != null)
                koffieDetailView.Close();
        }

    }
}
