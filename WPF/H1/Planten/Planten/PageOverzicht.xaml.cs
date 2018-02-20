using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Planten
{
    /// <summary>
    /// Interaction logic for PageOverzicht.xaml
    /// </summary>
    public partial class PageOverzicht : Page
    {
        public PageOverzicht()
        {
            InitializeComponent();
            setPlanten();
        }

        
        public void setPlanten()
        {
          
           
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            ListBoxPlanten.DataContext =  ((MainWindow)Window.GetWindow(this)).ComboBoxKleuren.SelectedItem; // bij laden pak de default index op mainwindow -> combobox als datacontext 
        }

        private void ListBoxPlanten_MouseDoubleClick(object sender, MouseButtonEventArgs e)
        {

            PageDetail detail = new PageDetail(ListBoxPlanten.SelectedItem);
            ((MainWindow)Window.GetWindow(this)).framePlanten.Content = detail;

            
        }
    }
}
