import { useState } from "react";
import { User, Phone, Mail, MapPin, Users, Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Membership = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gotra: "",
    maritalStatus: "",
    spouseName: "",
    occupation: "",
    annualIncome: "",
    // Contact Information
    email: "",
    phone: "",
    alternatePhone: "",
    currentAddress: "",
    permanentAddress: "",
    city: "",
    district: "",
    // Family Information
    familyMembers: "",
    businessDetails: "",
    // Preferences
    newsletter: false,
    terms: false,
    // Metadata for backend
    submissionDate: "",
    status: "pending",
    membershipId: "",
    profilePhoto: null as File | null
  });

  const { toast } = useToast();

  const gotras = [
    "Garg", "Goyal", "Singhal", "Mittal", "Agarwal", "Bansal", "Gupta", "Jindal",
    "Tayal", "Bhandal", "Mangal", "Tingal", "Kashyap", "Bhardwaj", "Vashishtha",
    "Gautam", "Khandelwal", "Maheshwari", "Other"
  ];

  const benefits = [
    {
      icon: Users,
      title: language === 'en' ? "Community Network" : "सामुदायिक नेटवर्क",
      description: language === 'en' ? "Connect with Agrawal families across Nepal and build lasting relationships" : "नेपाल भरका अग्रवाल परिवारहरूसँग जोडिनुहोस् र दीर्घकालीन सम्बन्ध निर्माण गर्नुहोस्"
    },
    {
      icon: Check,
      title: language === 'en' ? "Cultural Events" : "सांस्कृतिक कार्यक्रमहरू",
      description: language === 'en' ? "Participate in festivals, celebrations, and traditional ceremonies" : "पर्वहरू, उत्सवहरू र परम्परागत समारोहहरूमा भाग लिनुहोस्"
    },
    {
      icon: Mail,
      title: language === 'en' ? "Regular Updates" : "नियमित अपडेटहरू",
      description: language === 'en' ? "Stay informed about community news, events, and important announcements" : "सामुदायिक समाचार, कार्यक्रमहरू र महत्वपूर्ण घोषणाहरूको जानकारी पाउनुहोस्"
    },
    {
      icon: Phone,
      title: language === 'en' ? "Support System" : "सहयोग प्रणाली",
      description: language === 'en' ? "Access community support for personal and professional needs" : "व्यक्तिगत र व्यावसायिक आवश्यकताहरूका लागि सामुदायिक सहयोग प्राप्त गर्नुहोस्"
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({
          title: "File too large",
          description: "Please upload a photo smaller than 2MB.",
          variant: "destructive"
        });
        return;
      }
      setFormData(prev => ({ ...prev, profilePhoto: file }));
      toast({
        title: "Photo uploaded",
        description: "Profile photo has been successfully uploaded."
      });
    }
  };

  const validateForm = () => {
    const requiredFields = ['fullName', 'fatherName', 'dateOfBirth', 'gotra', 'email', 'phone', 'currentAddress', 'city'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing required fields",
        description: `Please fill in: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.terms) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and conditions to proceed.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const generateMembershipId = () => {
    const year = new Date().getFullYear();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `NAS${year}${random}`;
  };

  const prepareDataForBackend = (data: typeof formData) => {
    return {
      membershipId: generateMembershipId(),
      submissionDate: new Date().toISOString(),
      status: "pending",
      personalInfo: {
        fullName: data.fullName,
        fatherName: data.fatherName,
        motherName: data.motherName,
        dateOfBirth: data.dateOfBirth,
        gotra: data.gotra,
        maritalStatus: data.maritalStatus,
        spouseName: data.spouseName,
        occupation: data.occupation,
        annualIncome: data.annualIncome
      },
      contactInfo: {
        email: data.email,
        phone: data.phone,
        alternatePhone: data.alternatePhone,
        currentAddress: data.currentAddress,
        permanentAddress: data.permanentAddress,
        city: data.city,
        district: data.district
      },
      familyInfo: {
        familyMembers: data.familyMembers,
        businessDetails: data.businessDetails
      },
      preferences: {
        newsletter: data.newsletter
      },
      profilePhoto: data.profilePhoto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const backendData = prepareDataForBackend(formData);
      
      console.log("Prepared data for backend:", backendData);
      
      toast({
        title: "Registration Successful!",
        description: `Your membership application has been submitted. Your membership ID is ${backendData.membershipId}. We will contact you soon.`,
      });

      // Reset form
      setFormData({
        fullName: "",
        fatherName: "",
        motherName: "",
        dateOfBirth: "",
        gotra: "",
        maritalStatus: "",
        spouseName: "",
        occupation: "",
        annualIncome: "",
        email: "",
        phone: "",
        alternatePhone: "",
        currentAddress: "",
        permanentAddress: "",
        city: "",
        district: "",
        familyMembers: "",
        businessDetails: "",
        newsletter: false,
        terms: false,
        submissionDate: "",
        status: "pending",
        membershipId: "",
        profilePhoto: null
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50 page-enter">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif animate-fade-in">
              {language === 'en' ? 'Join Our Community' : 'हाम्रो समुदायमा सामेल हुनुहोस्'}
            </h1>
            <p className="text-xl text-saffron-200 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {language === 'en' ? 'Membership Registration' : 'सदस्यता दर्ता'}
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              {language === 'en' 
                ? 'Become a part of Nepal Agrawal Samaj and connect with your cultural heritage. Join hundreds of families who share the values and traditions of Maharaja Agrasen.'
                : 'नेपाल अग्रवाल समाजको सदस्य बन्नुहोस् र आफ्नो सांस्कृतिक सम्पदासँग जोडिनुहोस्। महाराजा अग्रसेणका मूल्य र परम्पराहरू साझा गर्ने सयौं परिवारहरूसँग जोडिनुहोस्।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">
              {language === 'en' ? 'Membership Benefits' : 'सदस्यताका फाइदाहरू'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'en' ? 'Why join Nepal Agrawal Samaj?' : 'नेपाल अग्रवाल समाजमा किन सामेल हुने?'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 stagger-children">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-saffron-200 shadow-lg hover:shadow-xl transition-all duration-300 card-animated">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-saffron-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-maroon-600" />
                  </div>
                  <CardTitle className="text-maroon-700">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white animate-fade-in" style={{animationDelay: '0.8s'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">
              {language === 'en' ? 'Membership Registration' : 'सदस्यता दर्ता'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'en' ? 'Fill out the form below to join our community' : 'हाम्रो समुदायमा सामेल हुन तलको फारम भर्नुहोस्'}
            </p>
          </div>

          <Card className="shadow-2xl border-saffron-200">
            <CardHeader className="bg-gradient-to-r from-saffron-100 to-emerald-100">
              <CardTitle className="text-2xl text-maroon-700 text-center">
                {language === 'en' ? 'Registration Form' : 'दर्ता फारम'}
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                {language === 'en' 
                  ? 'Please provide accurate information for processing your membership'
                  : 'कृपया आफ्नो सदस्यता प्रक्रियाका लागि सहि जानकारी प्रदान गर्नुहोस्'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-maroon-700 border-b border-saffron-200 pb-2">
                    {language === 'en' ? 'Personal Information' : 'व्यक्तिगत जानकारी'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">{language === 'en' ? 'Full Name *' : 'पूरा नाम *'}</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="fatherName">{language === 'en' ? "Father's Name *" : 'बुबाको नाम *'}</Label>
                      <Input
                        id="fatherName"
                        required
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange("fatherName", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="motherName">{language === 'en' ? "Mother's Name" : 'आमाको नाम'}</Label>
                      <Input
                        id="motherName"
                        value={formData.motherName}
                        onChange={(e) => handleInputChange("motherName", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="dateOfBirth">{language === 'en' ? 'Date of Birth *' : 'जन्म मिति *'}</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="gotra">{language === 'en' ? 'Gotra *' : 'गोत्र *'}</Label>
                      <Select value={formData.gotra} onValueChange={(value) => handleInputChange("gotra", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={language === 'en' ? "Select your gotra" : "आफ्नो गोत्र छान्नुहोस्"} />
                        </SelectTrigger>
                        <SelectContent>
                          {gotras.map((gotra) => (
                            <SelectItem key={gotra} value={gotra}>
                              {gotra}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="maritalStatus">{language === 'en' ? 'Marital Status' : 'वैवाहिक स्थिति'}</Label>
                      <Select value={formData.maritalStatus} onValueChange={(value) => handleInputChange("maritalStatus", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={language === 'en' ? "Select status" : "स्थिति छान्नुहोस्"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">{language === 'en' ? 'Single' : 'अविवाहित'}</SelectItem>
                          <SelectItem value="married">{language === 'en' ? 'Married' : 'विवाहित'}</SelectItem>
                          <SelectItem value="divorced">{language === 'en' ? 'Divorced' : 'सम्बन्धविच्छेद'}</SelectItem>
                          <SelectItem value="widowed">{language === 'en' ? 'Widowed' : 'विधवा/विधुर'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {formData.maritalStatus === "married" && (
                      <div>
                        <Label htmlFor="spouseName">{language === 'en' ? 'Spouse Name' : 'पति/पत्नीको नाम'}</Label>
                        <Input
                          id="spouseName"
                          value={formData.spouseName}
                          onChange={(e) => handleInputChange("spouseName", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    )}
                    
                    <div>
                      <Label htmlFor="occupation">{language === 'en' ? 'Occupation' : 'पेशा'}</Label>
                      <Input
                        id="occupation"
                        value={formData.occupation}
                        onChange={(e) => handleInputChange("occupation", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="annualIncome">Annual Income (NPR)</Label>
                      <Select value={formData.annualIncome} onValueChange={(value) => handleInputChange("annualIncome", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select income range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="below-500000">Below 5,00,000</SelectItem>
                          <SelectItem value="500000-1000000">5,00,000 - 10,00,000</SelectItem>
                          <SelectItem value="1000000-2000000">10,00,000 - 20,00,000</SelectItem>
                          <SelectItem value="2000000-5000000">20,00,000 - 50,00,000</SelectItem>
                          <SelectItem value="above-5000000">Above 50,00,000</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-maroon-700 border-b border-saffron-200 pb-2">
                    {language === 'en' ? 'Contact Information' : 'सम्पर्क जानकारी'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">{language === 'en' ? 'Email Address *' : 'इमेल ठेगाना *'}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">{language === 'en' ? 'Phone Number *' : 'फोन नम्बर *'}</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="alternatePhone">Alternate Phone</Label>
                      <Input
                        id="alternatePhone"
                        value={formData.alternatePhone}
                        onChange={(e) => handleInputChange("alternatePhone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="city">{language === 'en' ? 'City *' : 'शहर *'}</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="currentAddress">{language === 'en' ? 'Current Address *' : 'हालको ठेगाना *'}</Label>
                      <Textarea
                        id="currentAddress"
                        required
                        value={formData.currentAddress}
                        onChange={(e) => handleInputChange("currentAddress", e.target.value)}
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="permanentAddress">Permanent Address</Label>
                      <Textarea
                        id="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={(e) => handleInputChange("permanentAddress", e.target.value)}
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Family Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-maroon-700 border-b border-saffron-200 pb-2">
                    Family Information
                  </h3>
                  
                  <div>
                    <Label htmlFor="familyMembers">Family Members Details</Label>
                    <Textarea
                      id="familyMembers"
                      value={formData.familyMembers}
                      onChange={(e) => handleInputChange("familyMembers", e.target.value)}
                      placeholder="Please list family members with their names, ages, and relationship"
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="businessDetails">Business/Professional Details</Label>
                    <Textarea
                      id="businessDetails"
                      value={formData.businessDetails}
                      onChange={(e) => handleInputChange("businessDetails", e.target.value)}
                      placeholder="Brief description of your business or profession"
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-maroon-700 border-b border-saffron-200 pb-2">
                    Photo Upload
                  </h3>
                  
                  <div className="border-2 border-dashed border-saffron-300 rounded-lg p-6 text-center hover:border-saffron-400 transition-colors">
                    <Upload className="h-12 w-12 text-saffron-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload your recent photograph</p>
                    <p className="text-sm text-gray-500">Supported formats: JPG, PNG (Max 2MB)</p>
                    {formData.profilePhoto ? (
                      <div className="mt-4 space-y-2">
                        <p className="text-green-600 font-medium">✓ {formData.profilePhoto.name}</p>
                        <Button type="button" variant="outline" onClick={() => setFormData(prev => ({ ...prev, profilePhoto: null }))}>
                          Remove Photo
                        </Button>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <input
                          type="file"
                          id="profilePhoto"
                          accept="image/jpeg,image/png,image/jpg"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => document.getElementById('profilePhoto')?.click()}
                          className="animate-fade-in"
                        >
                          Choose File
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      {language === 'en' 
                        ? 'Subscribe to our newsletter for updates and announcements'
                        : 'अपडेट र घोषणाहरूका लागि हाम्रो न्यूजलेटरमा सब्स्क्राइब गर्नुहोस्'
                      }
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      {language === 'en' 
                        ? 'I agree to the terms and conditions of Nepal Agrawal Samaj *'
                        : 'म नेपाल अग्रवाल समाजका नियम र सर्तहरूमा सहमत छु *'
                      }
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit" 
                    className="w-full bg-maroon-600 hover:bg-maroon-700 text-white py-3 text-lg btn-animated"
                  >
                    {language === 'en' ? 'Submit Registration' : 'दर्ता पेश गर्नुहोस्'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Membership;
