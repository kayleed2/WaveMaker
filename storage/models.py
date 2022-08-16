from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class User(Base):
    __tablename__ = "User"

    id = Column(Integer, primary_key=True)
    email = Column(String(128))
    firstName = Column(String(128))
    lastName = Column(String(128))
    package = Column(String(128))
    platform = Column(String(128))
