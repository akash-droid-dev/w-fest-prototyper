import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, CheckCircle, Ticket } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const cities = [
  { name: "Dharoi", code: "DHR", price: 1200 },
  { name: "Polo Forest", code: "PLO", price: 1400 },
  { name: "Vad Nagar", code: "VDN", price: 1350 },
];

interface TicketData {
  ticketId: string;
  city: string;
  date: string;
  amount: number;
  packageName?: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

const BookTickets = () => {
  const location = useLocation();
  const state = location.state as {
    preselectedCity?: string;
    preselectedDate?: string;
    preselectedAmount?: number;
    selectedPackage?: string;
  } | null;

  const [step, setStep] = useState(1);
  const [selectedCity, setSelectedCity] = useState(state?.preselectedCity || "");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    state?.preselectedDate ? new Date(state.preselectedDate) : undefined
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const [showMyTickets, setShowMyTickets] = useState(false);
  const [myTickets, setMyTickets] = useState<TicketData[]>([]);

  const packageName = state?.selectedPackage;
  const customAmount = state?.preselectedAmount;

  useEffect(() => {
    const stored = localStorage.getItem("wfest_tickets");
    if (stored) setMyTickets(JSON.parse(stored));
  }, []);

  const getPrice = () => {
    if (customAmount) return customAmount;
    const city = cities.find((c) => c.name === selectedCity);
    return city?.price || 0;
  };

  const generateTicketId = () => {
    const city = cities.find((c) => c.name === selectedCity);
    const code = city?.code || "WFT";
    const dateStr = selectedDate ? format(selectedDate, "yyyyMMdd") : "";
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `WF-${code}-${dateStr}-${random}`;
  };

  const handlePayment = () => {
    const ticketId = generateTicketId();
    const newTicket: TicketData = {
      ticketId,
      city: selectedCity,
      date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      amount: getPrice(),
      packageName,
      name,
      email,
      phone,
      createdAt: new Date().toISOString(),
    };

    const existingTickets = JSON.parse(localStorage.getItem("wfest_tickets") || "[]");
    const updatedTickets = [...existingTickets, newTicket];
    localStorage.setItem("wfest_tickets", JSON.stringify(updatedTickets));

    setTicket(newTicket);
    setMyTickets(updatedTickets);
    setStep(5);
  };

  const qrValue = ticket
    ? `${ticket.ticketId}|${ticket.city}|${ticket.date}|₹${ticket.amount}${ticket.packageName ? `|${ticket.packageName}` : ""}`
    : "";

  if (showMyTickets) {
    return (
      <Layout>
        <div className="min-h-screen bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <BackButton />
              <button onClick={() => setShowMyTickets(false)} className="text-primary font-medium">
                Book New Ticket
              </button>
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">My Tickets</h1>
            {myTickets.length === 0 ? (
              <p className="text-center text-muted-foreground">No tickets booked yet.</p>
            ) : (
              <div className="grid gap-6 max-w-2xl mx-auto">
                {myTickets.map((t) => (
                  <div key={t.ticketId} className="bg-card rounded-2xl p-6 shadow-card">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-mono text-sm text-primary font-bold">{t.ticketId}</p>
                        <h3 className="font-serif text-xl font-semibold mt-2">{t.city}</h3>
                        <p className="text-muted-foreground">{t.date}</p>
                        {t.packageName && <p className="text-sm text-secondary mt-1">{t.packageName}</p>}
                        <p className="text-2xl font-bold text-primary mt-2">₹{t.amount}</p>
                      </div>
                      <QRCodeSVG value={`${t.ticketId}|${t.city}|${t.date}|₹${t.amount}`} size={80} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <BackButton />
            <button onClick={() => setShowMyTickets(true)} className="flex items-center gap-2 text-primary font-medium">
              <Ticket size={18} /> My Tickets ({myTickets.length})
            </button>
          </div>

          <div className="max-w-xl mx-auto">
            {/* Progress */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`flex-1 h-2 mx-1 rounded-full ${step >= s ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>

            {step === 1 && (
              <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in">
                <h2 className="font-serif text-2xl font-bold mb-6">Select City</h2>
                <div className="grid gap-4">
                  {cities.map((city) => (
                    <button
                      key={city.name}
                      onClick={() => { setSelectedCity(city.name); setStep(2); }}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedCity === city.name ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="font-semibold">{city.name}</span>
                      <span className="float-right text-primary font-bold">₹{city.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in">
                <h2 className="font-serif text-2xl font-bold mb-6">Select Date</h2>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal h-14", !selectedDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={selectedDate} onSelect={(d) => { setSelectedDate(d); if (d) setStep(3); }} initialFocus className="pointer-events-auto" />
                  </PopoverContent>
                </Popover>
              </div>
            )}

            {step === 3 && (
              <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in">
                <h2 className="font-serif text-2xl font-bold mb-6">Your Details</h2>
                <div className="space-y-4">
                  <Input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="h-12" />
                  <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12" />
                  <Input placeholder="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="h-12" />
                  <Button onClick={() => setStep(4)} disabled={!name || !email || !phone} className="w-full h-12 gradient-button">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in">
                <h2 className="font-serif text-2xl font-bold mb-6">Payment</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between"><span className="text-muted-foreground">City</span><span className="font-medium">{selectedCity}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span className="font-medium">{selectedDate && format(selectedDate, "PPP")}</span></div>
                  {packageName && <div className="flex justify-between"><span className="text-muted-foreground">Package</span><span className="font-medium text-secondary">{packageName}</span></div>}
                  <div className="flex justify-between text-xl font-bold border-t pt-3"><span>Total</span><span className="text-primary">₹{getPrice()}</span></div>
                </div>
                <Button onClick={handlePayment} className="w-full h-14 gradient-button text-lg">Pay Now</Button>
              </div>
            )}

            {step === 5 && ticket && (
              <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in text-center">
                <CheckCircle size={64} className="text-secondary mx-auto mb-4" />
                <h2 className="font-serif text-2xl font-bold mb-2">Booking Confirmed!</h2>
                <p className="font-mono text-lg text-primary font-bold mb-6">{ticket.ticketId}</p>
                <div className="bg-muted p-6 rounded-xl inline-block mb-6">
                  <QRCodeSVG value={qrValue} size={180} />
                </div>
                <div className="text-left space-y-2 mb-6">
                  <p><span className="text-muted-foreground">City:</span> <strong>{ticket.city}</strong></p>
                  <p><span className="text-muted-foreground">Date:</span> <strong>{ticket.date}</strong></p>
                  <p><span className="text-muted-foreground">Amount:</span> <strong className="text-primary">₹{ticket.amount}</strong></p>
                  {ticket.packageName && <p><span className="text-muted-foreground">Package:</span> <strong className="text-secondary">{ticket.packageName}</strong></p>}
                </div>
                <Button onClick={() => setShowMyTickets(true)} variant="outline" className="w-full">View All Tickets</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookTickets;
