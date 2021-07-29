using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Remmory.Controllers
{
    public class ParentChildRelationshipController : Controller
    {
        // GET: ParentChildRelationshipController
        public ActionResult Index()
        {
            return View();
        }

        // GET: ParentChildRelationshipController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ParentChildRelationshipController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ParentChildRelationshipController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ParentChildRelationshipController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ParentChildRelationshipController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ParentChildRelationshipController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ParentChildRelationshipController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
