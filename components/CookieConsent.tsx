"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-hx-surface border-t border-hx-border shadow-2xl animate-slide-up">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-hx-text mb-1">
              <strong>We use cookies</strong>
            </p>
            <p className="text-sm text-hx-muted">
              We use cookies to analyze site usage and improve your experience.{" "}
              <a href="/privacy" className="underline hover:text-hx-accent">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handleDecline} variant="ghost" size="sm">
              Decline
            </Button>
            <Button onClick={handleAccept} variant="accent" size="sm">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
