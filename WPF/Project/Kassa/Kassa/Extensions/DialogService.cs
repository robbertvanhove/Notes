using Kassa.View;
using Kassa.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace Kassa.Extensions
{
    public class DialogService
    {

        private Window koffieDetailView = null;

        public DialogService() { }

       

        public void CloseDetailDialog()
        {
            if (koffieDetailView != null)
                koffieDetailView.Close();
        }

    }
}
