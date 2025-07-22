import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Image, Newspaper, Plus, MapPin, Upload, Edit, Trash2 } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const LocationAdminDashboard = () => {
  const { locationId } = useParams();
  const { language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [isAddingNews, setIsAddingNews] = useState(false);
  const [isAddingGallery, setIsAddingGallery] = useState(false);

  const locationNames = {
    kathmandu: language === 'en' ? 'Kathmandu' : 'काठमाडौं',
    pokhara: language === 'en' ? 'Pokhara' : 'पोखरा',
    chitwan: language === 'en' ? 'Chitwan' : 'चितवन',
    dharan: language === 'en' ? 'Dharan' : 'धरान',
    butwal: language === 'en' ? 'Butwal' : 'बुटवल'
  };

  const currentLocation = locationNames[locationId as keyof typeof locationNames] || locationId;

  const [events, setEvents] = useState([
    { id: 1, title: 'Cultural Festival', date: '2024-01-15', status: 'upcoming', attendees: 150 },
    { id: 2, title: 'Business Meeting', date: '2024-01-20', status: 'completed', attendees: 45 }
  ]);

  const [news, setNews] = useState([
    { id: 1, title: 'New Community Center Opening', date: '2024-01-10', status: 'published' },
    { id: 2, title: 'Monthly Newsletter', date: '2024-01-05', status: 'draft' }
  ]);

  const [gallery, setGallery] = useState([
    { id: 1, title: 'Festival Photos', photos: 25, date: '2024-01-12' },
    { id: 2, title: 'Community Service', photos: 18, date: '2024-01-08' }
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '', description: '', date: '', time: '', venue: '', capacity: ''
  });

  const [newNews, setNewNews] = useState({
    title: '', content: '', excerpt: '', status: 'draft'
  });

  const [newGallery, setNewGallery] = useState({
    title: '', description: '', category: ''
  });

  const stats = [
    { 
      title: language === 'en' ? 'Total Events' : 'कुल कार्यक्रमहरू', 
      value: events.length.toString(), 
      icon: Calendar,
      color: 'text-blue-600 bg-blue-100'
    },
    { 
      title: language === 'en' ? 'Gallery Albums' : 'ग्यालरी एल्बमहरू', 
      value: gallery.length.toString(), 
      icon: Image,
      color: 'text-green-600 bg-green-100'
    },
    { 
      title: language === 'en' ? 'News Articles' : 'समाचार लेखहरू', 
      value: news.length.toString(), 
      icon: Newspaper,
      color: 'text-purple-600 bg-purple-100'
    },
    { 
      title: language === 'en' ? 'Total Photos' : 'कुल फोटोहरू', 
      value: gallery.reduce((sum, album) => sum + album.photos, 0).toString(), 
      icon: Image,
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, {
        id: Date.now(),
        title: newEvent.title,
        date: newEvent.date,
        status: 'upcoming',
        attendees: 0
      }]);
      setNewEvent({ title: '', description: '', date: '', time: '', venue: '', capacity: '' });
      setIsAddingEvent(false);
    }
  };

  const handleAddNews = () => {
    if (newNews.title && newNews.content) {
      setNews([...news, {
        id: Date.now(),
        title: newNews.title,
        date: new Date().toISOString().split('T')[0],
        status: newNews.status
      }]);
      setNewNews({ title: '', content: '', excerpt: '', status: 'draft' });
      setIsAddingNews(false);
    }
  };

  const handleAddGallery = () => {
    if (newGallery.title) {
      setGallery([...gallery, {
        id: Date.now(),
        title: newGallery.title,
        photos: 0,
        date: new Date().toISOString().split('T')[0]
      }]);
      setNewGallery({ title: '', description: '', category: '' });
      setIsAddingGallery(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-50 to-saffron-50 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-maroon-600 to-maroon-700 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-maroon-800">
                {currentLocation} {language === 'en' ? 'Admin Dashboard' : 'प्रशासक ड्यासबोर्ड'}
              </h1>
              <p className="text-maroon-600">
                {language === 'en' ? 'Manage your location content and events' : 'आफ्नो स्थानको सामग्री र कार्यक्रमहरू व्यवस्थापन गर्नुहोस्'}
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

        {/* Main Content Tabs */}
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="bg-white/80 border border-maroon-200">
            <TabsTrigger value="events" className="data-[state=active]:bg-maroon-600 data-[state=active]:text-white">
              <Calendar className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Events' : 'कार्यक्रमहरू'}
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-maroon-600 data-[state=active]:text-white">
              <Image className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Gallery' : 'ग्यालरी'}
            </TabsTrigger>
            <TabsTrigger value="news" className="data-[state=active]:bg-maroon-600 data-[state=active]:text-white">
              <Newspaper className="w-4 h-4 mr-2" />
              {language === 'en' ? 'News' : 'समाचार'}
            </TabsTrigger>
          </TabsList>

          {/* Events Tab */}
          <TabsContent value="events">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-maroon-800">
                      {language === 'en' ? 'Events Management' : 'कार्यक्रम व्यवस्थापन'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'en' ? 'Create and manage events for your location' : 'आफ्नो स्थानको लागि कार्यक्रमहरू सिर्जना र व्यवस्थापन गर्नुहोस्'}
                    </CardDescription>
                  </div>
                  <Dialog open={isAddingEvent} onOpenChange={setIsAddingEvent}>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800">
                        <Plus className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'Add Event' : 'कार्यक्रम थप्नुहोस्'}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-maroon-800">
                          {language === 'en' ? 'Create New Event' : 'नयाँ कार्यक्रम सिर्जना गर्नुहोस्'}
                        </DialogTitle>
                        <DialogDescription>
                          {language === 'en' ? 'Add a new event for your location' : 'आफ्नो स्थानको लागि नयाँ कार्यक्रम थप्नुहोस्'}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Event Title' : 'कार्यक्रमको शीर्षक'}</Label>
                          <Input
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Venue' : 'स्थान'}</Label>
                          <Input
                            value={newEvent.venue}
                            onChange={(e) => setNewEvent({...newEvent, venue: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Date' : 'मिति'}</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal border-maroon-200",
                                  !selectedDate && "text-muted-foreground"
                                )}
                              >
                                <Calendar className="mr-2 h-4 w-4" />
                                {selectedDate ? format(selectedDate, "PPP") : <span>{language === 'en' ? 'Pick a date' : 'मिति छान्नुहोस्'}</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={selectedDate}
                                onSelect={(date) => {
                                  setSelectedDate(date);
                                  setNewEvent({...newEvent, date: date ? format(date, 'yyyy-MM-dd') : ''});
                                }}
                                initialFocus
                                className="p-3 pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Time' : 'समय'}</Label>
                          <Input
                            type="time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Capacity' : 'क्षमता'}</Label>
                          <Input
                            type="number"
                            value={newEvent.capacity}
                            onChange={(e) => setNewEvent({...newEvent, capacity: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label>{language === 'en' ? 'Description' : 'विवरण'}</Label>
                          <Textarea
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                            className="border-maroon-200"
                            rows={3}
                          />
                        </div>
                        <Button onClick={handleAddEvent} className="md:col-span-2 bg-maroon-600 hover:bg-maroon-700">
                          {language === 'en' ? 'Create Event' : 'कार्यक्रम सिर्जना गर्नुहोस्'}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={event.id} className={`p-4 rounded-lg border bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-maroon-800">{event.title}</h3>
                            <p className="text-sm text-maroon-600">{event.date}</p>
                            <p className="text-xs text-maroon-500">{event.attendees} {language === 'en' ? 'attendees' : 'सहभागीहरू'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'} className={event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}>
                            {event.status === 'upcoming' ? (language === 'en' ? 'Upcoming' : 'आगामी') : (language === 'en' ? 'Completed' : 'सम्पन्न')}
                          </Badge>
                          <Button variant="outline" size="sm" className="border-maroon-200 text-maroon-600 hover:bg-maroon-50">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
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

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-maroon-800">
                      {language === 'en' ? 'Gallery Management' : 'ग्यालरी व्यवस्थापन'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'en' ? 'Upload and organize photos for your location' : 'आफ्नो स्थानको लागि फोटोहरू अपलोड र व्यवस्थित गर्नुहोस्'}
                    </CardDescription>
                  </div>
                  <Dialog open={isAddingGallery} onOpenChange={setIsAddingGallery}>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800">
                        <Plus className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'Add Gallery' : 'ग्यालरी थप्नुहोस्'}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-maroon-800">
                          {language === 'en' ? 'Create New Gallery Album' : 'नयाँ ग्यालरी एल्बम सिर्जना गर्नुहोस्'}
                        </DialogTitle>
                        <DialogDescription>
                          {language === 'en' ? 'Create a new photo album for your location' : 'आफ्नो स्थानको लागि नयाँ फोटो एल्बम सिर्जना गर्नुहोस्'}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Album Title' : 'एल्बमको शीर्षक'}</Label>
                          <Input
                            value={newGallery.title}
                            onChange={(e) => setNewGallery({...newGallery, title: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Category' : 'श्रेणी'}</Label>
                          <Input
                            value={newGallery.category}
                            onChange={(e) => setNewGallery({...newGallery, category: e.target.value})}
                            className="border-maroon-200"
                            placeholder={language === 'en' ? 'e.g., Cultural, Business, Service' : 'जस्तै, सांस्कृतिक, व्यापार, सेवा'}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Description' : 'विवरण'}</Label>
                          <Textarea
                            value={newGallery.description}
                            onChange={(e) => setNewGallery({...newGallery, description: e.target.value})}
                            className="border-maroon-200"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Upload Photos' : 'फोटोहरू अपलोड गर्नुहोस्'}</Label>
                          <div className="border-2 border-dashed border-maroon-200 rounded-lg p-8 text-center">
                            <Upload className="w-12 h-12 text-maroon-400 mx-auto mb-2" />
                            <p className="text-maroon-600">{language === 'en' ? 'Drag and drop photos here or click to browse' : 'फोटोहरू यहाँ तान्नुहोस् वा ब्राउज गर्न क्लिक गर्नुहोस्'}</p>
                            <Button variant="outline" className="mt-2 border-maroon-200">
                              {language === 'en' ? 'Browse Files' : 'फाइलहरू ब्राउज गर्नुहोस्'}
                            </Button>
                          </div>
                        </div>
                        <Button onClick={handleAddGallery} className="w-full bg-maroon-600 hover:bg-maroon-700">
                          {language === 'en' ? 'Create Album' : 'एल्बम सिर्जना गर्नुहोस्'}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gallery.map((album, index) => (
                    <div key={album.id} className={`p-4 rounded-lg border bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 animate-fade-in group`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="aspect-video bg-gradient-to-br from-maroon-100 to-saffron-100 rounded-lg mb-3 flex items-center justify-center">
                        <Image className="w-12 h-12 text-maroon-400" />
                      </div>
                      <h3 className="font-semibold text-maroon-800 mb-1">{album.title}</h3>
                      <p className="text-sm text-maroon-600 mb-2">{album.photos} {language === 'en' ? 'photos' : 'फोटोहरू'}</p>
                      <p className="text-xs text-maroon-500">{album.date}</p>
                      <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="outline" size="sm" className="border-maroon-200 text-maroon-600 hover:bg-maroon-50">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-maroon-800">
                      {language === 'en' ? 'News Management' : 'समाचार व्यवस्थापन'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'en' ? 'Create and publish news articles for your location' : 'आफ्नो स्थानको लागि समाचार लेखहरू सिर्जना र प्रकाशन गर्नुहोस्'}
                    </CardDescription>
                  </div>
                  <Dialog open={isAddingNews} onOpenChange={setIsAddingNews}>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800">
                        <Plus className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'Add News' : 'समाचार थप्नुहोस्'}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-maroon-800">
                          {language === 'en' ? 'Create News Article' : 'समाचार लेख सिर्जना गर्नुहोस्'}
                        </DialogTitle>
                        <DialogDescription>
                          {language === 'en' ? 'Write and publish news for your location' : 'आफ्नो स्थानको लागि समाचार लेख्नुहोस् र प्रकाशन गर्नुहोस्'}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Article Title' : 'लेखको शीर्षक'}</Label>
                          <Input
                            value={newNews.title}
                            onChange={(e) => setNewNews({...newNews, title: e.target.value})}
                            className="border-maroon-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Excerpt' : 'सारांश'}</Label>
                          <Textarea
                            value={newNews.excerpt}
                            onChange={(e) => setNewNews({...newNews, excerpt: e.target.value})}
                            className="border-maroon-200"
                            rows={2}
                            placeholder={language === 'en' ? 'Brief summary of the article...' : 'लेखको संक्षिप्त सारांश...'}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{language === 'en' ? 'Content' : 'सामग्री'}</Label>
                          <Textarea
                            value={newNews.content}
                            onChange={(e) => setNewNews({...newNews, content: e.target.value})}
                            className="border-maroon-200"
                            rows={8}
                            placeholder={language === 'en' ? 'Write your article content here...' : 'यहाँ आफ्नो लेखको सामग्री लेख्नुहोस्...'}
                          />
                        </div>
                        <div className="flex gap-4">
                          <Button 
                            onClick={() => {
                              setNewNews({...newNews, status: 'draft'});
                              handleAddNews();
                            }}
                            variant="outline" 
                            className="border-maroon-200 text-maroon-600"
                          >
                            {language === 'en' ? 'Save as Draft' : 'ड्राफ्टको रूपमा सेभ गर्नुहोस्'}
                          </Button>
                          <Button 
                            onClick={() => {
                              setNewNews({...newNews, status: 'published'});
                              handleAddNews();
                            }}
                            className="bg-maroon-600 hover:bg-maroon-700"
                          >
                            {language === 'en' ? 'Publish Now' : 'अहिले प्रकाशन गर्नुहोस्'}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {news.map((article, index) => (
                    <div key={article.id} className={`p-4 rounded-lg border bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Newspaper className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-maroon-800">{article.title}</h3>
                            <p className="text-sm text-maroon-600">{article.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={article.status === 'published' ? 'default' : 'secondary'} className={article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                            {article.status === 'published' ? (language === 'en' ? 'Published' : 'प्रकाशित') : (language === 'en' ? 'Draft' : 'ड्राफ्ट')}
                          </Badge>
                          <Button variant="outline" size="sm" className="border-maroon-200 text-maroon-600 hover:bg-maroon-50">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
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
        </Tabs>
      </div>
    </div>
  );
};

export default LocationAdminDashboard;