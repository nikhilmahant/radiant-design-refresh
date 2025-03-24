
import React, { useState, useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "../hooks/use-toast";
import PaymentModal from './PaymentModal';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '2:00 PM', '3:00 PM', 
  '4:00 PM', '5:00 PM'
];

const Appointment = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              entry.target.classList.add('animate-slide-right');
            } else if (entry.target === calendarRef.current) {
              entry.target.classList.add('animate-slide-left');
            }
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (calendarRef.current) observer.observe(calendarRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (calendarRef.current) observer.unobserve(calendarRef.current);
    };
  }, []);

  const handleBookAppointment = () => {
    if (!date || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select both date and time for your appointment.",
        variant: "destructive",
      });
      return;
    }

    // Open payment modal instead of showing toast
    setIsPaymentModalOpen(true);
  };

  return (
    <section ref={sectionRef} id="appointment" className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-blue-800">Book an Appointment</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Huddar. Please select a date and time that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={contentRef}
            className="opacity-0"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-800">Select Date</CardTitle>
                <CardDescription>Choose your preferred consultation date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => 
                    date < new Date() || 
                    date.getDay() === 0 // Disable Sundays
                  }
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
          
          <div 
            ref={calendarRef}
            className="opacity-0"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-800">Select Time</CardTitle>
                <CardDescription>Available time slots for consultation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`flex items-center justify-center gap-2 p-3 border rounded-md transition-colors ${
                        selectedTime === time 
                          ? 'bg-blue-100 border-blue-300 text-blue-800' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <Clock size={14} />
                      <span>{time}</span>
                    </button>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 font-medium">Consultation Fee: ₹1,500.00</p>
                    <p className="text-xs text-gray-600">Payment required to confirm appointment</p>
                  </div>
                
                  <Button
                    className="w-full bg-blue-800 hover:bg-blue-700"
                    onClick={handleBookAppointment}
                    disabled={!date || !selectedTime}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Book & Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {date && selectedTime && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          appointmentDetails={{
            date: date,
            time: selectedTime
          }}
        />
      )}
    </section>
  );
};

export default Appointment;
