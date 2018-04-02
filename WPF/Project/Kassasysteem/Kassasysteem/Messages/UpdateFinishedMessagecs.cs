using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kassasysteem.Messages
{
    class UpdateFinishedMessage
    {
        public string State { get; set; }

        public UpdateFinishedMessage(string state)
        {
            State = state;
        }

    }
}
