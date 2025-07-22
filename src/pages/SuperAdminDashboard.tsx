import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Users, MapPin, Plus, Edit, Trash2, Shield, Activity, Calendar, Image, Newspaper } from 'lucide-react';

const SuperAdminDashboard = () => {
  const { language } = useLanguage();
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Ram Sharma', email: 'ram@example.com', location: 'kathmandu', status: 'active' },
    { id: 2, name: 'Sita Gurung', email: 'sita@example.com', location: 'pokhara', status: 'active' },
    { id: 3, name: 'Hari Thapa', email: 'hari@example.com', location: 'chitwan', status: 'inactive' }
  ]);
  
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', location: '', password: '' });

  const locations = [
    { id: 'kathmandu', name: language === 'en' ? 'Kathmandu' : 'काठमाडौं' },
    { id: 'pokhara', name: language === 'en' ? 'Pokhara' : 'पोखरा' },
    { id: 'chitwan', name: language === 'en' ? 'Chitwan' : 'चितवन' },
    { id: 'dharan', name: language === 'en' ? 'Dharan' : 'धरान' },
    { id: 'butwal', name: language === 'en' ? 'Butwal' : 'बुटवल' }
  ];

  const getLocationName = (locationId: string) => {
    return locations.find(loc => loc.id === locationId)?.name || locationId;
  };

  const handleAddAdmin = () => {
    if (newAdmin.name && newAdmin.email && newAdmin.location && newAdmin.password) {
      setAdmins([...admins, {
        id: Date.now(),
        name: newAdmin.name,
        email: newAdmin.email,
        location: newAdmin.location,
        status: 'active'
      }]);
      setNewAdmin({ name: '', email: '', location: '', password: '' });
      setIsAddingAdmin(false);
    }
  };

  const toggleAdminStatus = (id: number) => {
    setAdmins(admins.map(admin => 
      admin.id === id 
        ? { ...admin, status: admin.status === 'active' ? 'inactive' : 'active' }
        : admin
    ));
  };

  const deleteAdmin = (id: number) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  const stats = [
    { 
      title: language === 'en' ? 'Total Admins' : 'कुल प्रशासकहरू', 
      value: admins.length.toString(), 
      icon: Users,
      color: 'text-blue-600 bg-blue-100'
    },
    { 
      title: language === 'en' ? 'Active Locations' : 'सक्रिय स्थानहरू', 
      value: new Set(admins.map(a => a.location)).size.toString(), 
      icon: MapPin,
      color: 'text-green-600 bg-green-100'
    },
    { 
      title: language === 'en' ? 'Active Admins' : 'सक्रिय प्रशासकहरू', 
      value: admins.filter(a => a.status === 'active').length.toString(), 
      icon: Activity,
      color: 'text-emerald-600 bg-emerald-100'
    },
    { 
      title: language === 'en' ? 'Total Events' : 'कुल कार्यक्रमहरू', 
      value: '42', 
      icon: Calendar,
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-50 to-saffron-50 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-maroon-600 to-maroon-700 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-maroon-800">
                {language === 'en' ? 'Super Admin Dashboard' : 'सुपर प्रशासक ड्यासबोर्ड'}
              </h1>
              <p className="text-maroon-600">
                {language === 'en' ? 'Manage all location administrators' : 'सबै स्थान प्रशासकहरूको व्यवस्थापन गर्नुहोस्'}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-maroon-800">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="admins" className="space-y-6">
          <TabsList className="bg-white/80 border border-maroon-200">
            <TabsTrigger value="admins" className="data-[state=active]:bg-maroon-600 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Admin Management' : 'प्रशासक व्यवस्थापन'}
            </TabsTrigger>
            <TabsTrigger value="overview" className="data-[state=active]:bg-maroon-600 data-[state=active]:text-white">
              <Activity className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Content Overview' : 'सामग्री अवलोकन'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="admins" className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-maroon-800">
                      {language === 'en' ? 'Location Administrators' : 'स्थान प्रशासकहरू'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'en' ? 'Manage admin accounts for each location' : 'प्रत्येक स्थानको लागि प्रशासक खाताहरू व्यवस्थापन गर्नुहोस्'}
                    </CardDescription>
                  </div>
                  <Dialog open={isAddingAdmin} onOpenChange={setIsAddingAdmin}>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800">
                        <Plus className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'Add Admin' : 'प्रशासक थप्नुहोस्'}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-maroon-800">
                          {language === 'en' ? 'Add New Administrator' : 'नयाँ प्रशासक थप्नुहोस्'}
                        </DialogTitle>
                        <DialogDescription>
                          {language === 'en' ? 'Create a new admin account for a location' : 'स्थानको लागि नयाँ प्रशासक खाता सिर्जना गर्नुहोस्'}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{language === 'en' ? 'Full Name' : 'पूरा नाम'}</Label>
                          <Input
                            id="name"
                            value={newAdmin.name}
                            onChange={(e) => setNewAdmin({...newAdmin, name: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{language === 'en' ? 'Email' : 'इमेल'}</Label>
                          <Input
                            id="email"
                            type="email"
                            value={newAdmin.email}
                            onChange={(e) => setNewAdmin({...newAdmin, email: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Location' : 'स्थान'}</Label>
                          <Select value={newAdmin.location} onValueChange={(value) => setNewAdmin({...newAdmin, location: value})}>
                            <SelectTrigger className="border-maroon-200">
                              <SelectValue placeholder={language === 'en' ? 'Select location' : 'स्थान छान्नुहोस्'} />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                              {locations.map(location => (
                                <SelectItem key={location.id} value={location.id}>{location.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">{language === 'en' ? 'Password' : 'पासवर्ड'}</Label>
                          <Input
                            id="password"
                            type="password"
                            value={newAdmin.password}
                            onChange={(e) => setNewAdmin({...newAdmin, password: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <Button onClick={handleAddAdmin} className="w-full bg-maroon-600 hover:bg-maroon-700">
                          {language === 'en' ? 'Create Admin' : 'प्रशासक सिर्जना गर्नुहोस्'}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {admins.map((admin, index) => (
                    <div key={admin.id} className={`p-4 rounded-lg border bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-maroon-500 to-maroon-600 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-maroon-800">{admin.name}</h3>
                            <p className="text-sm text-maroon-600">{admin.email}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <MapPin className="w-3 h-3 text-maroon-500" />
                              <span className="text-xs text-maroon-500">{getLocationName(admin.location)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={admin.status === 'active' ? 'default' : 'secondary'} className={admin.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                            {admin.status === 'active' ? (language === 'en' ? 'Active' : 'सक्रिय') : (language === 'en' ? 'Inactive' : 'निष्क्रिय')}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleAdminStatus(admin.id)}
                            className="border-maroon-200 text-maroon-600 hover:bg-maroon-50"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteAdmin(admin.id)}
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-maroon-800">
                    <Calendar className="w-5 h-5" />
                    {language === 'en' ? 'Recent Events' : 'हालका कार्यक्रमहरू'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-maroon-600">
                    {language === 'en' ? 'Monitor events across all locations' : 'सबै स्थानहरूमा कार्यक्रमहरूको निगरानी गर्नुहोस्'}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-maroon-800">
                    <Image className="w-5 h-5" />
                    {language === 'en' ? 'Gallery Updates' : 'ग्यालरी अपडेटहरू'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-maroon-600">
                    {language === 'en' ? 'Latest photo uploads from locations' : 'स्थानहरूबाट नवीनतम फोटो अपलोडहरू'}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-maroon-800">
                    <Newspaper className="w-5 h-5" />
                    {language === 'en' ? 'News Articles' : 'समाचार लेखहरू'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-maroon-600">
                    {language === 'en' ? 'Recent news and announcements' : 'हालका समाचार र घोषणाहरू'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;