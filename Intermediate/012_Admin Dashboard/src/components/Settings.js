import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Switch,
  TextField,
  Button,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Palette as PaletteIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: true,
    darkMode: false,
    language: 'en',
    timezone: 'UTC-5',
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSelectChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <Box>
      <Accordion defaultExpanded sx={{ mb: 2, borderRadius: '12px!important' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SecurityIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Security Settings
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.twoFactorAuth}
                    onChange={() => handleToggle('twoFactorAuth')}
                    color="primary"
                  />
                }
                label="Two-Factor Authentication"
              />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Add an extra layer of security to your account
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Current Password"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="New Password"
                type="password"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2, borderRadius: '12px!important' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <NotificationsIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Notifications
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailNotifications}
                    onChange={() => handleToggle('emailNotifications')}
                    color="primary"
                  />
                }
                label="Email Notifications"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.pushNotifications}
                    onChange={() => handleToggle('pushNotifications')}
                    color="primary"
                  />
                }
                label="Push Notifications"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2, borderRadius: '12px!important' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <PaletteIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Appearance
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.darkMode}
                    onChange={() => handleToggle('darkMode')}
                    color="primary"
                  />
                }
                label="Dark Mode"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  value={settings.language}
                  label="Language"
                  onChange={(e) => handleSelectChange('language', e.target.value)}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Timezone</InputLabel>
                <Select
                  value={settings.timezone}
                  label="Timezone"
                  onChange={(e) => handleSelectChange('timezone', e.target.value)}
                >
                  <MenuItem value="UTC-5">EST (UTC-5)</MenuItem>
                  <MenuItem value="UTC-8">PST (UTC-8)</MenuItem>
                  <MenuItem value="UTC+0">GMT (UTC+0)</MenuItem>
                  <MenuItem value="UTC+1">CET (UTC+1)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="outlined" size="large">
          Cancel
        </Button>
        <Button variant="contained" size="large" sx={{ px: 4 }}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;