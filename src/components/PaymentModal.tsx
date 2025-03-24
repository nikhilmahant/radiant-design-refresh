
import React, { useState } from 'react';
import { X, CreditCard, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointmentDetails: {
    date: Date;
    time: string;
  };
}

const PaymentModal = ({ isOpen, onClose, appointmentDetails }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handlePayment = () => {
    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful",
        description: "Your appointment has been confirmed.",
      });
      onClose();
    }, 1500);
  };

  // Format the date for display
  const formattedDate = appointmentDetails.date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md animate-scale">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-semibold text-blue-800">Complete Payment</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Appointment Details</h4>
            <p className="text-gray-600">Date: <span className="font-medium">{formattedDate}</span></p>
            <p className="text-gray-600">Time: <span className="font-medium">{appointmentDetails.time}</span></p>
            <p className="text-gray-600">Doctor: <span className="font-medium">Dr. Sudheendra Huddar</span></p>
            <p className="text-gray-600 mt-2">Consultation Fee: <span className="font-medium text-blue-800">₹ 1,500.00</span></p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Select Payment Method</h4>
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`border rounded-lg p-4 flex flex-col items-center transition-all ${
                  paymentMethod === 'card' 
                    ? 'border-blue-400 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard className="h-8 w-8 mb-2 text-blue-800" />
                <span className="text-sm font-medium">Credit/Debit Card</span>
              </button>
              
              <button
                className={`border rounded-lg p-4 flex flex-col items-center transition-all ${
                  paymentMethod === 'upi' 
                    ? 'border-blue-400 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}
                onClick={() => setPaymentMethod('upi')}
              >
                <Wallet className="h-8 w-8 mb-2 text-blue-800" />
                <span className="text-sm font-medium">UPI/Net Banking</span>
              </button>
            </div>
          </div>
          
          {paymentMethod === 'card' && (
            <div className="mb-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <input 
                  type="text" 
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input 
                    type="text" 
                    placeholder="123"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
            </div>
          )}
          
          {paymentMethod === 'upi' && (
            <div className="mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">UPI ID</label>
                <input 
                  type="text" 
                  placeholder="yourname@upi"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
          )}
          
          <Button
            className="w-full bg-blue-800 hover:bg-blue-700"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </Button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            By completing this payment, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
