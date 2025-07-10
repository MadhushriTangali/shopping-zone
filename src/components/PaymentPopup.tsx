
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CreditCard, Smartphone, Wallet, Building, Truck, CheckCircle } from 'lucide-react';

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  cartTotal: number;
  itemCount: number;
  onOrderConfirm: () => void;
}

const PaymentPopup = ({ isOpen, onClose, cartTotal, itemCount, onOrderConfirm }: PaymentPopupProps) => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, disabled: true },
    { id: 'netbanking', name: 'Net Banking', icon: Building, disabled: true },
    { id: 'upi', name: 'UPI', icon: Smartphone, disabled: true },
    { id: 'wallet', name: 'Digital Wallet', icon: Wallet, disabled: true },
    { id: 'cod', name: 'Cash on Delivery', icon: Truck, disabled: false }
  ];

  const handleConfirmOrder = () => {
    if (selectedPayment === 'cod') {
      setOrderPlaced(true);
      setTimeout(() => {
        onOrderConfirm();
        setOrderPlaced(false);
        setSelectedPayment('');
        onClose();
      }, 2000);
    }
  };

  const handleClose = () => {
    if (!orderPlaced) {
      setSelectedPayment('');
      onClose();
    }
  };

  if (orderPlaced) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-600">Your order has been placed successfully. You will receive a confirmation email shortly.</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Complete Your Payment</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Items ({itemCount})</span>
              <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Delivery Charges</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="border-t border-gray-300 pt-2 mt-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Total Amount</span>
                <span className="font-bold text-lg text-blue-600">₹{cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Select Payment Method</h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={method.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      method.disabled 
                        ? 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-60' 
                        : selectedPayment === method.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => !method.disabled && setSelectedPayment(method.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => !method.disabled && setSelectedPayment(method.id)}
                        disabled={method.disabled}
                        className="h-4 w-4 text-blue-600"
                      />
                      <IconComponent className="h-5 w-5 text-gray-600" />
                      <span className={`font-medium ${method.disabled ? 'text-gray-500' : 'text-gray-900'}`}>
                        {method.name}
                      </span>
                      {method.disabled && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                          Currently Disabled
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmOrder}
              disabled={selectedPayment !== 'cod'}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedPayment === 'cod'
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Confirm Order
            </button>
          </div>

          {selectedPayment !== 'cod' && selectedPayment && (
            <p className="text-sm text-gray-600 text-center">
              This payment method is currently disabled. Please select Cash on Delivery.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentPopup;
