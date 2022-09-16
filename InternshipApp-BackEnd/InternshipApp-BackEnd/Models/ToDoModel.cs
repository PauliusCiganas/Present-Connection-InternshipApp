﻿using System.ComponentModel.DataAnnotations;

namespace InternshipApp_BackEnd.Models
{
    public class ToDoModel
    {
        [Key]
        public int Id { get; set; }
        public string ToDoName { get; set; }
        public string ToDoDescription{ get; set; }
    }
}
