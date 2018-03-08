using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Boeken.ViewModel;

namespace UnitTestBoeken
{
    [TestClass]
    public class UnitTestBoekenViewModel
    {
        [TestMethod]
        public void TestMethodAantalBoeken()
        {
            var viewmodel = new BoekenViewModel();
            Assert.AreEqual(7, viewmodel.Boeken.Count);
        }

        [TestMethod]
        public void TestMethodControleerAuteur()
        {
            var viewmodel = new BoekenViewModel();

            Assert.AreEqual("J.K. Rowling", viewmodel.Boeken[2].Auteur);
        }

        [TestMethod]
        public void TestMethodControleerTitel()
        {
            var viewmodel = new BoekenViewModel();

            
            Assert.AreEqual("Harry Potter en de Gevangene van Azkaban", viewmodel.Boeken[1].Titel);
        }

    }
}
