import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, User, MapPin } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const locations = [
    { id: 'kathmandu', name: language === 'en' ? 'Kathmandu' : 'काठमाडौं' },
    { id: 'pokhara', name: language === 'en' ? 'Pokhara' : 'पोखरा' },
    { id: 'chitwan', name: language === 'en' ? 'Chitwan' : 'चितवन' },
    { id: 'dharan', name: language === 'en' ? 'Dharan' : 'धरान' },
    { id: 'butwal', name: language === 'en' ? 'Butwal' : 'बुटवल' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - replace with real backend integration
    if (role === 'super-admin') {
      navigate('/admin/super');
    } else if (role === 'location-admin' && location) {
      navigate(`/admin/location/${location}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-50 to-saffron-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-maroon-600 to-maroon-700 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-maroon-800">
              {language === 'en' ? 'Admin Login' : 'प्रशासक लगइन'}
            </CardTitle>
            <CardDescription className="text-maroon-600">
              {language === 'en' ? 'Access your administrative dashboard' : 'आफ्नो प्रशासनिक ड्यासबोर्ड पहुँच गर्नुहोस्'}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-maroon-700">
                  {language === 'en' ? 'Email' : 'इमेल'}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-maroon-200 focus:border-maroon-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-maroon-700">
                  {language === 'en' ? 'Password' : 'पासवर्ड'}
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-maroon-200 focus:border-maroon-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-maroon-700">
                  {language === 'en' ? 'Role' : 'भूमिका'}
                </Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger className="border-maroon-200">
                    <SelectValue placeholder={language === 'en' ? 'Select your role' : 'आफ्नो भूमिका छान्नुहोस्'} />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-maroon-200">
                    <SelectItem value="super-admin">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-maroon-600" />
                        {language === 'en' ? 'Super Admin' : 'सुपर प्रशासक'}
                      </div>
                    </SelectItem>
                    <SelectItem value="location-admin">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-maroon-600" />
                        {language === 'en' ? 'Location Admin' : 'स्थान प्रशासक'}
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {role === 'location-admin' && (
                <div className="space-y-2 animate-fade-in">
                  <Label className="text-maroon-700">
                    {language === 'en' ? 'Location' : 'स्थान'}
                  </Label>
                  <Select value={location} onValueChange={setLocation} required>
                    <SelectTrigger className="border-maroon-200">
                      <SelectValue placeholder={language === 'en' ? 'Select your location' : 'आफ्नो स्थान छान्नुहोस्'} />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-maroon-200">
                      {locations.map(loc => (
                        <SelectItem key={loc.id} value={loc.id}>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-maroon-600" />
                            {loc.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white transition-all duration-300 hover:scale-105"
                disabled={!role || (role === 'location-admin' && !location)}
              >
                {language === 'en' ? 'Sign In' : 'साइन इन गर्नुहोस्'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;