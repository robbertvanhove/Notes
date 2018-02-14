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

namespace IntroWPF
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

        private void ButtonGrid_Click(object sender, RoutedEventArgs e)
        {
            WindowGrid windowGrid = new WindowGrid();
            windowGrid.Show();
        }

        private void ButtonDock_Click(object sender, RoutedEventArgs e)
        {
            var myWindow = new WindowDockPanel();
            myWindow.Show();
        }

        private void ButtonWrap_Click(object sender, RoutedEventArgs e)
        {
            var myWindow = new WindowWrapPanel();
            myWindow.Show();
        }

        private void ButtonCanvas_Click(object sender, RoutedEventArgs e)
        {
            var myWindow = new WindowCanvas();
            myWindow.Show();
        }
    }
}
