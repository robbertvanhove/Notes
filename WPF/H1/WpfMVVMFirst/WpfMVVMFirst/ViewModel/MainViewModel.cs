using WpfMVVMFirst.Model;
using System.Windows.Input;
using WpfMVVMFirst.Model;

namespace WpfMVVMFirst.ViewModel
{
    class MainViewModel : BaseViewModel
    {
        private Customer customer;

        public Customer Customer
        {
            get { return customer; }
            set
            {
                customer = value;
                NotifyPropertyChanged();
            }
        }

        public MainViewModel()
        {
            LadenCustomer();
        }

        private void LadenCustomer()
        {
            Customer = new Customer("Bert Boonen", 2000, "Netherlands");
        }


    }
}

