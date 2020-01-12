import { Component, OnInit, Inject, HostListener } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-to-top",
  templateUrl: "./to-top.component.html",
  styleUrls: ["./to-top.component.scss"]
})
export class ToTopComponent implements OnInit {
  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    (function smoothScroll() {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - currentScroll * 8);
      }
    });
  }

  ngOnInit() {}
}
