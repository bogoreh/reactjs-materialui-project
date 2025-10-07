import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import { PictureAsPdf, InsertDriveFile, GetApp } from '@mui/icons-material';
import { generatePDFReport } from '../../utils/pdfGenerator';

export default function ReportGenerator() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [reportType, setReportType] = useState('weekly');
  const [dateRange, setDateRange] = useState('');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleExport = (format) => {
    if (format === 'pdf') {
      generatePDFReport({ type: reportType, dateRange });
    } else {
      // Handle other export formats (CSV, Excel)
      console.log(`Exporting ${reportType} report as ${format}`);
    }
    handleDialogClose();
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<GetApp />}
        onClick={handleMenuOpen}
        sx={{ bgcolor: 'primary.main' }}
      >
        Export
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDialogOpen}>
          <PictureAsPdf sx={{ mr: 1 }} />
          Generate PDF Report
        </MenuItem>
        <MenuItem onClick={() => handleExport('csv')}>
          <InsertDriveFile sx={{ mr: 1 }} />
          Export as CSV
        </MenuItem>
        <MenuItem onClick={() => handleExport('excel')}>
          <InsertDriveFile sx={{ mr: 1 }} />
          Export as Excel
        </MenuItem>
      </Menu>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h6" fontWeight={600}>
            Generate PDF Report
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Report Type</InputLabel>
              <Select
                value={reportType}
                label="Report Type"
                onChange={(e) => setReportType(e.target.value)}
              >
                <MenuItem value="daily">Daily Report</MenuItem>
                <MenuItem value="weekly">Weekly Report</MenuItem>
                <MenuItem value="monthly">Monthly Report</MenuItem>
                <MenuItem value="custom">Custom Report</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Date Range"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              placeholder="e.g., Jan 1, 2024 - Jan 31, 2024"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => handleExport('pdf')}
            startIcon={<PictureAsPdf />}
          >
            Generate PDF
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}