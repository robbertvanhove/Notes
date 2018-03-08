using System.Collections.ObjectModel;
using BeheerContacten.Model;
using System.Windows.Input;

namespace BeheerContacten.ViewModel
{
    public class ContactPersonenViewModel : BaseViewModel
    {        
        public ContactPersonenViewModel()
        {
            LeesContactPersonen();
            KoppelenCommands();
        }

        private ObservableCollection<ContactPersoon> contactpersonen;
        public ObservableCollection<ContactPersoon> Contactpersonen
        {
            get
            {
                return contactpersonen;
            }

            set
            {
                contactpersonen = value;
                NotifyPropertyChanged();
            }
        }

        private ContactPersoon currentContact;
        public ContactPersoon CurrentContact
        {
            get
            {
                return currentContact;
            }

            set
            {
                currentContact = value;
                NotifyPropertyChanged();
            }
        }

        private void KoppelenCommands()
        {
            WijzigenCommand = new BaseCommand(WijzigenContactPersoon);
            VerwijderenCommand = new BaseCommand(VerwijderenContactPersoon);
            ToevoegenCommand = new BaseCommand(ToevoegenContactPersoon);
        }

        public ICommand VerwijderenCommand { get; set; }
        public ICommand WijzigenCommand { get; set; }
        public ICommand ToevoegenCommand { get; set; }

        private void LeesContactPersonen()
        {
            ContactPersoonDataService contactDS = new ContactPersoonDataService();
            Contactpersonen = new ObservableCollection<ContactPersoon>(contactDS.GetContactPersonen());
        }

        public void WijzigenContactPersoon()
        {
            if (currentContact != null)
            {
                ContactPersoonDataService contactDS = new ContactPersoonDataService();
                contactDS.UpdateContactPersoon(currentContact);

                //refresh
                LeesContactPersonen();
            }
        }

        public void ToevoegenContactPersoon()
        {
            ContactPersoonDataService contactDS =  new ContactPersoonDataService();
            contactDS.InsertContactPersoon(CurrentContact);

            //Refresh
            LeesContactPersonen();
        }



        public void VerwijderenContactPersoon()
        {
            if (CurrentContact != null)
            {
                ContactPersoonDataService contactDS =
                    new ContactPersoonDataService();
                contactDS.DeleteContactPersoon(CurrentContact);

                //Refresh
                LeesContactPersonen();
            }

        }

    }

}
