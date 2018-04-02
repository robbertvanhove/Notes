using Kassasysteem.View;
using Kassasysteem.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace Kassasysteem.Extensions
{
    public class DialogService
    {

        private Window productWijzigenWindow = null;

        public DialogService() { }

        public void ShowProductWijzigenDialog()
        {
            productWijzigenWindow = new ProductWijzigenWindow();
            productWijzigenWindow.ShowDialog();
        }

        public void CloseProductWijzigenDialog()
        {
            if (productWijzigenWindow != null)
                productWijzigenWindow.Close();
        }

    }
}
