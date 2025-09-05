import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import QRCode from "qrcode";

interface CallDesktopModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phoneNumber?: string;
}

export const CallDesktopModal: React.FC<CallDesktopModalProps> = ({
  open,
  onOpenChange,
  phoneNumber = "+918764551955"
}) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    const generateQR = async () => {
      try {
        const url = window.location.href;
        const qrDataUrl = await QRCode.toDataURL(url, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qrDataUrl);
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    };

    if (open) {
      generateQR();
    }
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-primary" />
            Call from Mobile Device
          </DialogTitle>
          <DialogDescription className="text-center py-4">
            For the best calling experience, please open this website on your smartphone and tap the call button.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            {qrCodeUrl ? (
              <img 
                src={qrCodeUrl} 
                alt="QR Code to open website on mobile" 
                className="w-32 h-32 mx-auto mb-2 rounded-lg"
              />
            ) : (
              <div className="w-32 h-32 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-muted-foreground">Loading QR...</div>
              </div>
            )}
            <p className="text-sm text-muted-foreground mb-2">
              Scan QR code or visit on mobile
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Or call directly:
            </p>
            <p className="text-lg font-semibold text-primary">
              {phoneNumber}
            </p>
          </div>
          
          <Button 
            onClick={() => onOpenChange(false)} 
            className="w-full"
            variant="outline"
          >
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};