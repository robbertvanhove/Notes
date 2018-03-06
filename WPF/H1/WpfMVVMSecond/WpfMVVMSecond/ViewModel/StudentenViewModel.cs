using System.Collections.ObjectModel;
using System.Windows.Input;
using WpfMVVMSecond.Model;

namespace WpfMVVMSecond.ViewModel
{
    class StudentenViewModel : BaseViewModel
    {
        private int nummer;
 
        public StudentenViewModel()
        {
            LadenStudenten();
            KoppelenCommands();
        }
        
        private ObservableCollection<Student> studenten;
        public ObservableCollection<Student> Studenten
        {
            get
            {
                return studenten;
            }
            set
            {
                studenten = value;
                NotifyPropertyChanged();
            }
        }
        private void LadenStudenten()
        {
            Studenten = new ObservableCollection<Student>();
            Studenten.Add(new Student("Jef Verboven", "2 ITF", 2));
            Studenten.Add(new Student("Hans Verkerken", "2 ITF", 1));
            Studenten.Add(new Student("Lies Pauwels", "2 ITF", 3));
            Studenten.Add(new Student("Stefanie Moreels", "2 ITF", 2));
        }

        //commands
        private ICommand addStudentCommand;
        public ICommand AddStudentCommand { get; set; }
        public ICommand DeleteStudentCommand { get; set; }

        

        private void KoppelenCommands()
        {
            AddStudentCommand = new BaseCommand(Toevoegen);
            DeleteStudentCommand = new BaseCommand(Verwijderen);
        }

        private void Toevoegen()
        {
            Studenten.Add(new Student("Student " + (++nummer), "2 ITF", nummer));
        }

        private Student selectedStudent;
        public Student SelectStudent
        {
            get { return selectedStudent; }
            set
            {
                selectedStudent = value;
                NotifyPropertyChanged();
            }
        }

        private void Verwijderen()
        {
            if (SelectStudent != null)
            {
                Studenten.Remove(SelectStudent);
            }
        }





    }

}
