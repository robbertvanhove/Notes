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
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void ComboBoxKleuren_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if ((framePlanten.Content != null) && (framePlanten.Content is PageOverzicht))
            {
                ((PageOverzicht)framePlanten.Content).ListBoxPlanten.DataContext = ComboBoxKleuren.SelectedItem; //datacontext van listboxplanten gelijk maken aan selectedItem
            }
        }

        private void ButtonBackward_Click(object sender, RoutedEventArgs e)
        {
            if (framePlanten.NavigationService.CanGoBack)
            {
                framePlanten.NavigationService.GoBack();
            }
        }

        private void ButtonForward_Click(object sender, RoutedEventArgs e)
        {
            if (framePlanten.CanGoForward)
            {
                framePlanten.GoForward();
            }
        }
    }
}
