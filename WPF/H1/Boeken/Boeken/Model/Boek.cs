using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Boeken.Model
{
    class Boek: BaseModel
    {
        private string titel;
        private string auteur;
        private string beschrijving;
        private string foto;
        
        public Boek(string auteur, string titel, string foto, string beschrijving)
        {
            Titel = titel;
            Auteur = auteur;
            Beschrijving = beschrijving;
        }

        //gettters en setters
        public string Titel
        {
            get { return titel; }
            set
            {
                NotifyPropertyChanged();
                titel = value;
            }
        }

        public string Auteur
        {
            get { return auteur; }
            set
            {
                auteur = value;
                NotifyPropertyChanged();
            }
        }

        public string Beschrijving
        {
            get { return beschrijving; }
            set
            {
                beschrijving = value;
                NotifyPropertyChanged();
            }
        }

        public string Foto
        {
            get { return foto; }
            set
            {
                foto = value;
                NotifyPropertyChanged();
            }
        }


    }
}
