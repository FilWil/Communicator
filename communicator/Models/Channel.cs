﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace communicator.Models
{
    public class Channel
    {
        public int ChannelId { get; set; }
        public string Name { get; set; }
        public virtual ICollection<UserChannel> UserChannels { get; set; }  
    }
}
