import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone, QrCode } from "lucide-react";

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
            <QrCode className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
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