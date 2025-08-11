# 🛠️ SQL Environment Setup Guide for VS Code

## 🎯 **Option 1: SQLite (Recommended for Learning)**

### Manual Installation Steps:

1. **Download SQLite**:
   - Go to: https://sqlite.org/download.html
   - Download "Precompiled Binaries for Windows" (sqlite-tools-win32-x86-*.zip)
   - Extract to a folder like `C:\sqlite\`

2. **Add to PATH** (Optional):
   - Add `C:\sqlite\` to your Windows PATH environment variable
   - Or use full path: `C:\sqlite\sqlite3.exe`

3. **VS Code Extensions** (Already installed):
   - ✅ SQLite Viewer
   - ✅ SQLite Viewer (Alternative)

### Quick Start with SQLite:

```bash
# Create a new database
sqlite3 company.db

# In SQLite prompt, run your SQL commands
.read sql-basics.sql

# Exit SQLite
.quit
```

---

## 🎯 **Option 2: PostgreSQL (Production-Ready)**

### Installation:

1. **Download PostgreSQL**:
   - Go to: https://www.postgresql.org/download/windows/
   - Download and install PostgreSQL (includes pgAdmin)

2. **Install PostgreSQL Extension**:
   - Search for "PostgreSQL" in VS Code extensions
   - Install "PostgreSQL" by Chris Kolkman

3. **Connection Setup**:
   ```
   Host: localhost
   Port: 5432
   Database: postgres
   Username: postgres
   Password: (your password)
   ```

---

## 🎯 **Option 3: MySQL (Popular Choice)**

### Installation:

1. **Download MySQL**:
   - Go to: https://dev.mysql.com/downloads/installer/
   - Download MySQL Installer for Windows

2. **Install MySQL Extension**:
   - Search for "MySQL" in VS Code extensions
   - Install "MySQL" by Jun Han

---

## 🎯 **Option 4: Online SQL Environments (No Installation)**

### Browser-Based Options:

1. **SQLiteOnline**: https://sqliteonline.com/
2. **DB Fiddle**: https://www.db-fiddle.com/
3. **W3Schools SQL Tryit**: https://www.w3schools.com/sql/trysql.asp
4. **PostgreSQL Online**: https://rextester.com/l/postgresql_online_compiler

---

## 🚀 **Recommended Setup for Your Learning**

### For Beginners - SQLite Setup:

1. **Create SQLite Database File**:
   ```bash
   # In your project folder
   sqlite3 company.db
   ```

2. **Run Your SQL Scripts**:
   ```sql
   -- In SQLite command line
   .read sql-basics.sql
   
   -- Or copy-paste queries one by one
   SELECT * FROM employees;
   ```

3. **VS Code Integration**:
   - Right-click on `.db` files in VS Code
   - Select "Open with SQLite Viewer"
   - Browse tables and run queries

---

## 📋 **Quick Commands Reference**

### SQLite Commands:
```bash
sqlite3 database.db          # Open/create database
.tables                      # List all tables
.schema tablename           # Show table structure
.read filename.sql          # Execute SQL file
.output filename.txt        # Save output to file
.quit                       # Exit SQLite
```

### PostgreSQL Commands:
```bash
psql -U username -d database    # Connect to database
\l                              # List databases
\dt                             # List tables
\d tablename                    # Describe table
\i filename.sql                 # Execute SQL file
\q                              # Quit
```

---

## 🎯 **Next Steps After Setup**

1. **Test Your Setup**:
   ```sql
   -- Simple test query
   SELECT 'Hello SQL World!' AS greeting;
   ```

2. **Run the Practice Database**:
   - Execute the `sql-basics.sql` file
   - Try the example queries
   - Complete the exercises

3. **Explore VS Code Features**:
   - Syntax highlighting
   - Query execution
   - Table browsing
   - Export results

---

## 🔧 **Troubleshooting**

### Common Issues:

1. **"Command not found"**:
   - Make sure SQLite is in your PATH
   - Use full path to executable

2. **Permission errors**:
   - Run as administrator if needed
   - Check file permissions

3. **Extension not working**:
   - Reload VS Code
   - Check extension requirements

### Need Help?
- Check VS Code Output panel
- Look at extension documentation
- Try online SQL environments as backup

---

## 🎓 **Learning Path**

1. ✅ **Setup Environment** (You are here)
2. 📚 **Basic SQL Queries** (SELECT, WHERE, ORDER BY)
3. 🔄 **Joins and Relationships**
4. 📊 **Aggregations and Grouping**
5. 🎯 **Advanced Topics** (Subqueries, CTEs, Window Functions)
6. 🚀 **Real Projects** (Build actual databases)

Ready to start querying! 🎉
