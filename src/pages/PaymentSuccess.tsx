
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { CheckCircle, Download, Home, Package } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const { orderTotal, shippingInfo, orderItems } = location.state || {};

  useEffect(() => {
    // Save order to Supabase here
    console.log('Order completed:', { orderTotal, shippingInfo, orderItems });
  }, [orderTotal, shippingInfo, orderItems]);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  if (!orderTotal) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h2>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Return to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-8">
              <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
              <p className="text-gray-600 text-lg">
                Thank you for your order. Your payment has been processed successfully.
              </p>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Order Summary</h3>
                  <p className="text-gray-600">Order Total: <span className="font-bold text-green-600">{formatPrice(orderTotal)}</span></p>
                  <p className="text-gray-600">Order Date: {new Date().toLocaleDateString()}</p>
                  <p className="text-gray-600">Order ID: #{Date.now().toString().slice(-8)}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Shipping Address</h3>
                  <div className="text-gray-600 text-sm">
                    <p>{shippingInfo?.fullName}</p>
                    <p>{shippingInfo?.address}</p>
                    <p>{shippingInfo?.city}, {shippingInfo?.state} {shippingInfo?.zipCode}</p>
                    <p>{shippingInfo?.country}</p>
                  </div>
                </div>
              </div>

              {/* Ordered Items */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Items Ordered</h3>
                <div className="space-y-3">
                  {orderItems?.map((item: any) => (
                    <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-gray-900">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
              <div className="space-y-2 text-blue-800">
                <div className="flex items-center">
                  <Package className="h-4 w-4 mr-2" />
                  <span className="text-sm">Your order is being processed</span>
                </div>
                <div className="flex items-center">
                  <Package className="h-4 w-4 mr-2" />
                  <span className="text-sm">You'll receive a confirmation email shortly</span>
                </div>
                <div className="flex items-center">
                  <Package className="h-4 w-4 mr-2" />
                  <span className="text-sm">Estimated delivery: 3-5 business days</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Download Receipt
              </button>
              
              <Link
                to="/"
                className="flex items-center justify-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </div>

            {/* Support */}
            <div className="text-center mt-8 text-gray-600">
              <p>Need help? Contact our support team at <a href="mailto:support@nxttrends.com" className="text-blue-600 hover:text-blue-800">support@nxttrends.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
