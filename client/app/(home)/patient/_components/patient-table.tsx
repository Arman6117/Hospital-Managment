'use client'
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Eye, MoreHorizontal, ChevronLeft, ChevronRight, Trash } from 'lucide-react';

type Patient = {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  lastVisited: string;
};

const mockPatients: Patient[] = [
  { id: 1, name: 'Aditi Singh', age: 28, gender: 'Female', lastVisited: '2025-10-15' },
  { id: 2, name: 'Rahul Sharma', age: 45, gender: 'Male', lastVisited: '2025-10-14' },
  { id: 3, name: 'Sneha Patil', age: 32, gender: 'Female', lastVisited: '2025-10-13' },
  { id: 4, name: 'Vikram Desai', age: 55, gender: 'Male', lastVisited: '2025-10-12' },
  { id: 5, name: 'Priya Reddy', age: 38, gender: 'Female', lastVisited: '2025-10-11' },
  { id: 6, name: 'Arjun Mehta', age: 41, gender: 'Male', lastVisited: '2025-10-10' },
  { id: 7, name: 'Kavya Iyer', age: 26, gender: 'Female', lastVisited: '2025-10-09' },
  { id: 8, name: 'Rohan Kapoor', age: 52, gender: 'Male', lastVisited: '2025-10-08' },
  { id: 9, name: 'Meera Joshi', age: 35, gender: 'Female', lastVisited: '2025-10-07' },
  { id: 10, name: 'Amit Kumar', age: 48, gender: 'Male', lastVisited: '2025-10-06' },
  { id: 11, name: 'Neha Gupta', age: 29, gender: 'Female', lastVisited: '2025-10-05' },
  { id: 12, name: 'Sanjay Verma', age: 62, gender: 'Male', lastVisited: '2025-10-04' },
  { id: 13, name: 'Anjali Nair', age: 31, gender: 'Female', lastVisited: '2025-10-03' },
  { id: 14, name: 'Kiran Rao', age: 44, gender: 'Other', lastVisited: '2025-10-02' },
  { id: 15, name: 'Pooja Shah', age: 27, gender: 'Female', lastVisited: '2025-10-01' },
];

const GenderBadge = ({ gender }: { gender: Patient['gender'] }) => {
  const variants = {
    Male: 'bg-blue-100 text-blue-700 border-blue-200',
    Female: 'bg-pink-100 text-pink-700 border-pink-200',
    Other: 'bg-purple-100 text-purple-700 border-purple-200',
  };

  return (
    <Badge className={`${variants[gender]} border font-medium`}>
      {gender}
    </Badge>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
};

const PatientTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(mockPatients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPatients = mockPatients.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    // <Card className="shadow-lg border-gray-200">
     
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-semibold text-gray-700 w-12">#</TableHead>
                <TableHead className="font-semibold text-gray-700">Patient Name</TableHead>
                <TableHead className="font-semibold text-gray-700">Age</TableHead>
                <TableHead className="font-semibold text-gray-700">Gender</TableHead>
                <TableHead className="font-semibold text-gray-700">Last Visited</TableHead>
                <TableHead className="font-semibold text-gray-700 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPatients.map((patient, index) => (
                <TableRow 
                  key={patient.id}
                  className="hover:bg-blue-50/50 transition-colors"
                >
                  <TableCell className="font-medium text-gray-600">
                    {startIndex + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        {patient.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-800">{patient.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700">{patient.age}</TableCell>
                  <TableCell>
                    <GenderBadge gender={patient.gender} />
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {formatDate(patient.lastVisited)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-gray-100"
                      >
                        <Trash className="w-4 h-4  text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50/50">
          <div className="text-sm text-gray-600">
            Showing <span className="font-semibold">{startIndex + 1}</span> to{' '}
            <span className="font-semibold">{Math.min(endIndex, mockPatients.length)}</span> of{' '}
            <span className="font-semibold">{mockPatients.length}</span> patients
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className={`h-8 w-8 p-0 ${
                    currentPage === page
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : ''
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    // </Card>
  );
};

export default PatientTable;